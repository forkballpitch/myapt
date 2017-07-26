package yul.realestateboard;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import yul.board.BoardReplyVO;
import yul.board.BoardVO;
import yul.common.FileUtil;
import yul.common.FileVO;
import yul.common.SearchVO;

@Controller 
public class RealEstateCtr {

    @Autowired
    private RealEstateSvc realEsateSvc;
    
    /**
     * 리스트.
     */
    @RequestMapping(value = "/realEstateList")
    public String boardList(SearchVO searchVO, ModelMap modelMap) {

        searchVO.pageCalculate( realEsateSvc.selectBoardCount(searchVO) ); // startRow, endRow

        List<?> listview  = realEsateSvc.selectRealEstateGapList(searchVO);
        
        modelMap.addAttribute("listview", listview);
        modelMap.addAttribute("searchVO", searchVO);
        
        return "realestate/RealEstateList";
    }
    
    
    /**
     * 차트리스트.
     */
    @RequestMapping(value = "/realEstateChartList")
    public String ChartList(SearchVO searchVO, ModelMap modelMap) {

        searchVO.pageCalculate( realEsateSvc.selectBoardCount(searchVO) ); // startRow, endRow

//        List<?> listview  = realEsateSvc.selectRealEstateGapList(searchVO);
//        
//        modelMap.addAttribute("listview", listview);
//        modelMap.addAttribute("searchVO", searchVO);
        
        return "realestate/RealEstateChartList";
    }
    
    
    
    
    /**
     * 단지 매매가 추이
     */
    @RequestMapping(value = "/realEstateAptSellList")
    public String AptList(SearchVO searchVO, ModelMap modelMap) {


        ArrayList<HashMap<String, String>> oCompareList = new ArrayList<HashMap<String, String>>();
        HashMap<String, String> oSessionCompareMap;
    	Document doc;
    	String estateCompare ="";
    	try {
    		
    		oSessionCompareMap = new HashMap<String, String>(); 


    		doc = Jsoup.connect("http://price.joinsland.joins.com/ajax/price.info.dongapt.asp?areaCode=1174010100&cpId=&danjiId=&mcateCode=A1A3A4&mcateGroup=A1").get();
    		
    		
    		// get page title
    		String title = doc.title();
    		System.out.println("title : " + title);

    		// get all links
    		//Elements links = doc.select("a[href]");
    		//tbl_box
    		
    		Elements links = doc.select("table.tbl_compare");
    		for (Element link : links) {

    			// get the value from href attribute
    			//System.out.println("\nlink : " + link.attr("href"));
    			//System.out.println("text : " + link.text());
    			estateCompare = links.outerHtml();

    		}
    		
    		 modelMap.addAttribute("EstateSellInfo", estateCompare);

    	} catch (IOException e) {
    		e.printStackTrace();
    	}

        
        
        return "realestate/RealEstateAptSellList";
    }
    
    
    
    
    
    
    
    
    
    
    /** 
     * 글 쓰기. 
     */
    @RequestMapping(value = "/realEstateForm")
    public String boardForm(HttpServletRequest request, ModelMap modelMap) {
        String brdno = request.getParameter("brdno");
        if (brdno != null) {
            BoardVO boardInfo = realEsateSvc.selectBoardOne(brdno);
            List<?> listview = realEsateSvc.selectBoard6FileList(brdno);
        
            modelMap.addAttribute("boardInfo", boardInfo);
            modelMap.addAttribute("listview", listview);
        }
        
        return "realestate/RealEstateForm";
    }
    
    /**
     * 글 저장.
     */
    @RequestMapping(value = "/realEstateSave")
    public String boardSave(HttpServletRequest request, BoardVO boardInfo) {
        String[] fileno = request.getParameterValues("fileno");
        
        FileUtil fs = new FileUtil();
        List<FileVO> filelist = fs.saveAllFiles(boardInfo.getUploadfile());
        
        boardInfo.setBrdmemo(boardInfo.getContents());

        realEsateSvc.insertBoard(boardInfo, filelist, fileno);

        return "redirect:/RealEstateList";
    }

    /**
     * 글 읽기.
     */
    @RequestMapping(value = "/realEstateRead")
    public String board7Read(HttpServletRequest request, ModelMap modelMap) {
        
        String brdno = request.getParameter("brdno");
        
        realEsateSvc.updateBoard6Read(brdno);
        BoardVO boardInfo = realEsateSvc.selectBoardOne(brdno);
        List<?> listview = realEsateSvc.selectBoard6FileList(brdno);
        List<?> replylist = realEsateSvc.selectBoard6ReplyList(brdno);
        
        modelMap.addAttribute("boardInfo", boardInfo);
        modelMap.addAttribute("listview", listview);
        modelMap.addAttribute("replylist", replylist);
        
        return "realestate/RealEstateRead";
        //return "board7/BoardReadAjax";
    }
    
    /**
     * 글 삭제.
     */
    @RequestMapping(value = "/realEstateDelete")
    public String boardDelete(HttpServletRequest request) {
        
        String brdno = request.getParameter("brdno");
        
        realEsateSvc.deleteBoardOne(brdno);
        
        return "redirect:/RealEstateList";
    }

    /* ===================================================================== */
    
    /**
     * 댓글 저장.
     */
    @RequestMapping(value = "/realEstateReplySave")
    public String board7ReplySave(HttpServletRequest request, BoardReplyVO boardReplyInfo) {
        
        realEsateSvc.insertBoardReply(boardReplyInfo);

        return "redirect:/RealEstateRead?brdno=" + boardReplyInfo.getBrdno();
    }
    
    /**
     * 댓글 저장 with Ajax.
     */
    @RequestMapping(value = "/realEstateReplySaveAjax")
    public void board7ReplySaveAjax(HttpServletResponse response, BoardReplyVO boardReplyInfo) {
        ObjectMapper mapper = new ObjectMapper();
        response.setContentType("application/json;charset=UTF-8");
        
        realEsateSvc.insertBoardReply(boardReplyInfo);
        
        try {
            response.getWriter().print( mapper.writeValueAsString(boardReplyInfo.getReno()));
        } catch (IOException ex) {
            System.out.println("오류: 댓글 저장에 문제가 발생했습니다.");
        }
    }

    /**
     * 댓글 저장  with Ajax2.
     */
    @RequestMapping(value = "/realEstateReplySaveAjax4Reply")
    public String board7ReplySaveAjax4Reply(BoardReplyVO boardReplyInfo, ModelMap modelMap) {
        
        realEsateSvc.insertBoardReply(boardReplyInfo);

        modelMap.addAttribute("replyInfo", boardReplyInfo);
        
        return "realestate/RealEstateReadAjax4Reply";
    }
    
    /**
     * 댓글 삭제.
     */
    @RequestMapping(value = "/realEstateReplyDelete")
    public String board7ReplyDelete(BoardReplyVO boardReplyInfo) {
        
        if (!realEsateSvc.deleteBoard6Reply(boardReplyInfo.getReno()) ) {
            return "realestate/BoardFailure";
        }
        return "redirect:/RealEstateRead?brdno=" + boardReplyInfo.getBrdno();
    }
    
    /**
     * 댓글 삭제 with Ajax.
     */
    @RequestMapping(value = "/realEstateReplyDeleteAjax")
    public void board7ReplyDeleteAjax(HttpServletResponse response, BoardReplyVO boardReplyInfo) {
        ObjectMapper mapper = new ObjectMapper();
        response.setContentType("application/json;charset=UTF-8");
        
        try {
            if (!realEsateSvc.deleteBoard6Reply(boardReplyInfo.getReno()) ) {
                response.getWriter().print(mapper.writeValueAsString("Fail"));
            } else {
                response.getWriter().print(mapper.writeValueAsString("OK"));
            }
        } catch (IOException ex) {
            System.out.println("오류: 댓글 삭제에 문제가 발생했습니다.");
        }
    }
    
}
