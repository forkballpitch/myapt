<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>


<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>board7</title>
<script src="js/jquery-2.2.3.min.js"></script>
 <link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script> 
  <script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script> 
  <link href="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.css" rel="stylesheet">
  <script src="http://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.1/summernote.js"></script>


<script>


function fn_formSubmit(){
	if ( $.trim($("#brdwriter").val()) == "") {
		alert("작성자를 입력해주세요.");
		$("#brdwriter").focus();
		return;
	}
	if ($.trim($("#brdtitle").val()) == "") {
		alert("글 제목을 입력해주세요.");
		$("#brdtitle").focus();
		return;
	}
	if ($.trim($('#brdmemo').summernote('code')) == "") {
		
		alert("글 내용을 입력해주세요.");
		$("#brdmemo").focus();
		return;
	}
	
	  $('#list').append('<input type="hidden" name="Contents", id="Contents" />');
      $('#Contents').val($('#brdmemo').summernote('code'));

	$("#form1").submit();
} 


$('#brdmemo').summernote('code', $('#brdmemo').summernote('code'));
</script>
</head>
<body>
	<form id="form1" name="form1" action="board7Save" method="post" enctype="multipart/form-data">
		<table border="1" style="width:600px">
			<caption>게시판</caption>
			<colgroup>
				<col width='15%' />
				<col width='*%' />
			</colgroup>
			<tbody>
				<tr>
					<td>작성자</td> 
					<td><input type="text" id="brdwriter" name="brdwriter" size="20" maxlength="20" value="<c:out value="${boardInfo.brdwriter}"/>"></td> 
				</tr>
				<tr>
					<td>제목</td> 
					<td><input type="text" id="brdtitle" name="brdtitle" size="70" maxlength="250" value="<c:out value="${boardInfo.brdtitle}"/>"></td> 
				</tr>
				<tr>
					<td>내용</td> 
					<td>
					
					     <div id="brdmemo" name="brdmemo" rows="5" cols="60"><c:out value="${boardInfo.brdmemo}"/><p>Hello Summernote</p></div>
					</td> 
					
				</tr>
				<tr>
					<td>첨부</td> 
					<td>
						<c:forEach var="listview" items="${listview}" varStatus="status">
							<input type="checkbox" name="fileno" value="<c:out value="${listview.fileno}"/>">	
            				<a href="fileDownload?filename=<c:out value="${listview.filename}"/>&downname=<c:out value="${listview.realname }"/>"> 							 
							<c:out value="${listview.filename}"/></a> <c:out value="${listview.size2String()}"/><br/>
						</c:forEach>					
					
						<input type="file" name="uploadfile" multiple="" />
					</td> 
				</tr>
			</tbody>
		</table> 
		<div id="list"></div>
		
		<input type="hidden" name="brdno" value="<c:out value="${boardInfo.brdno}"/>"> 

		<a href="#" onclick="fn_formSubmit()">저장</a>
	</form>	

  <script>
    $(document).ready(function() {
        $('#brdmemo').summernote();
        
    });
  </script>

</body>
</html>
