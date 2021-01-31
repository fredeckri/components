<%
Response.CodePage = 65001 
Response.CharSet = "utf-8"
%>
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Olá fui incluido por condicional!</h1>
</body>
</html>
<script>
console.log($("h1").text())
</script>
