<%@ page language="java" contentType="text/html; charset=EUC-KR" pageEncoding="EUC-KR" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=euc-kr" />
<title>board1</title>
</head>
<body>
	<form name="form1" action="board1Save">
		<table border="1" style="width:600px">
			<caption>�Խ���</caption>
			<colgroup>
				<col width='15%' />
				<col width='*%' />
			</colgroup>
			<tbody>
				<tr>
					<td>�ۼ���</td> 
					<td><input type="text" name="brdwriter" size="20" maxlength="20"></td> 
				</tr>
				<tr>
					<td>����</td> 
					<td><input type="text" name="brdtitle" size="70" maxlength="250"></td> 
				</tr>
				<tr>
					<td>����</td> 
					<td><textarea name="brdmemo" rows="5" cols="60"></textarea></td> 
				</tr>
			</tbody>
		</table>    
		<a href="#" onclick="form1.submit()">����</a>
	</form>	
</body>
</html>
