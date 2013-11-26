package org.codekin.pobi.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.codekin.pobi.service.CommunityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private CommunityService communityService;
	
	

	/**
	 * select freeboard list
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/list", method = RequestMethod.GET)
	public String freeboardList(Locale locale, Model model) {
		Map<String, Object> boardInfo = communityService.selectFreeBoardList();
		model.addAttribute("freeboard", boardInfo.get("boardList"));
		model.addAttribute("paginginfo", boardInfo.get("pagingInfo"));
		
		return "community/freeboard/list";
	}
	
	/**
	 * forward at the write page
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/write", method = RequestMethod.GET)
	public String freeboardWrite(Locale locale, Model model) {
		return "community/freeboard/write";
	}

	/**
	 * forward at the write page
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/save", method = RequestMethod.POST)
	public String freeboardSave(Locale locale, Model model) {
		communityService.saveFreeBoardList();
		
		return "redirect:/community/freeboard/list.do";
	}

	/**
	 * view post
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/postview", method = RequestMethod.GET)
	public String freeboardPostView(Locale locale, Model model) {
		model.addAttribute("postdetail", communityService.selectPostDetail());
		
		return "community/freeboard/viewer";
	}

	/**
	 * update post
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/updatePost", method = RequestMethod.GET)
	public String freeboardUpdateView(Locale locale, Model model) {
		model.addAttribute("postdetail", communityService.selectPostDetail());
		
		return "community/freeboard/write";
	}
	
	/**
	 * update post
	 * @param locale
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/community/freeboard/update", method = RequestMethod.POST)
	public String freeboardPostUpdate(Locale locale, Model model, HttpServletRequest request) {
		return "redirect:/community/freeboard/postview.do?post_id=" + communityService.updatePost();
	}

	
	
	
	
	
	
	
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}

	@RequestMapping(value = "/randommachine", method = RequestMethod.GET)
	public String randommachine(Locale locale, Model model) {
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("randommachine", formattedDate );
		
		return "randommachine";
	}

	@RequestMapping(value = "/usedmarketplaces", method = RequestMethod.GET)
	public String usedmarketplaces(Locale locale, Model model) {
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("usedmarketplaces", formattedDate );
		
		return "usedmarketplaces";
	}
}