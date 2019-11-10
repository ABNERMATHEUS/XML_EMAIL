<?php  

  $login = trim($_POST["login"]);
  $senha = trim($_POST["senha"]);



  if ($login == "abner"  && $senha == "123"){
    $retorno["Status"]= "sucesso";
    $retorno["mensagem"]="autenticado";
    

  }

  else{

    $retorno["Status"]= "Fail";
    $retorno["mensagem"]= "Login ou senha Incorreto";
  }

  echo $retorno_json = json_encode($retorno);


?>