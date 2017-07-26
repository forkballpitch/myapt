<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>board7</title>
<link href="css/global.css" rel="stylesheet"/>
<script src="js/jquery-2.2.3.min.js"></script>
<script>
function fn_formSubmit(){
	document.form1.submit();	
}
</script>
</head>
<body>
<div id="box">
<div id="top"></div>
  <div id="left">
  	<ul>
  	    <li><h1>MYAPT</h1></li>
	    <li><a class="link_item" href="/board/realEstateList">SEOUL GAP</a></li>
	  	<li><a class="link_item" href="/board/realEstateChartList">CHART</a></li>
	  	<li><a class="link_item" href="/board/realEstateAptSellList">DANJI</a></li>
	  	<li><a class="link_item" href="/category/ALGORITHM">재건축수익률</a></li>
  	</ul>
  </div>
  
    <div id="main">
	
					
	<table class="gaptable" >
		
		<colgroup>
			<col width='8%' />
			<col width='*%' />
			<col width='15%' />
			<col width='15%' />
			<col width='10%' />
			<col width='10%' />
		</colgroup>
		<thead>
			<tr>
				<th>번호</th> 
				<th>도시명</th>
				<th>단지명</th>
				<th>전세가</th>
				<th>평형</th>
				<th>건축년월</th>
				<th>매매가</th>
				<th>갭차이</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="listview" items="${listview}" varStatus="status">										  				
				<tr>
					<td><c:out value="${status.index}"/></td>
					<td style="max-width: 100px;  overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
						<c:out value="${listview.city}"/>			
					</td>
					<td><c:out value="${listview.village}"/></td>
					<td><c:out value="${listview.deposit}"/></td>
					<td><c:out value="${listview.space}"/></td>
					<td><c:out value="${listview.constructyear}"/></td>
					<td><c:out value="${listview.price}"/></td>
					<td><c:out value="${listview.gap}"/></td>
				</tr>
				

			</c:forEach>
		</tbody>
	</table>
	
	<form id="form1" name="form1"  method="post">
	    <jsp:include page="/WEB-INF/jsp/common/pagingforSubmit.jsp" />
	    
		<div>
			<input type="checkbox" name="searchType" value="brdtitle" <c:if test="${fn:indexOf(searchVO.searchType, 'brdtitle')!=-1}">checked="checked"</c:if>/>
			<label class="chkselect" for="searchType1">제목</label>
			<input type="checkbox" name="searchType" value="brdmemo" <c:if test="${fn:indexOf(searchVO.searchType, 'brdmemo')!=-1}">checked="checked"</c:if>/>
			<label class="chkselect" for="searchType2">내용</label>
			<input type="text" name="searchKeyword" style="width:150px;" maxlength="50" value='<c:out value="${searchVO.searchKeyword}"/>' onkeydown="if(event.keyCode == 13) { fn_formSubmit();}">
			<input name="btn_search" value="검색" class="btn_sch" type="button" onclick="fn_formSubmit()" />
		</div>
	</form>	
	</div> <!-- main -->
	<div id="bottom">bottom</div>
	</div>
</body>
</html>
