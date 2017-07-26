<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>board7</title>
<link href="css/global.css" rel="stylesheet"/>
<link href="css/chart.css" rel="stylesheet"/>


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
          <div id="containerseoul"></div>
          <div id="containergyeonggi"></div>
	</div> 
	<!-- main -->
	<div id="bottom">bottom</div>
	</div>
	<!-- 차트 스크립트 -->
	
    <script src="js/highcharts/highcharts.js"></script>
    <script src="js/highcharts/data.js"></script>
    <script src="js/highcharts/exporting.js"></script>
    <script src="js/highcharts/chart.js"></script>
</body>
</html>
