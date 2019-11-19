<?php  

   
$login= trim($_POST["login"]);
$senha = trim($_POST["senha"]);


$path="../xml/xmlLogin/"; //Endereço
$diretorio= dir($path); //CRIANDO UM DIRETORIO COM DIR E COLOCANDO A VARIAVÉL DENTRO



while ( $arquivoXml = $diretorio->read()){
      if ($arquivoXml != "." ){
          if($arquivoXml != ".."){
                $xmlString=file_get_contents($path.$arquivoXml);
                 $xmlObjeto=simplexml_load_string($xmlString);
                 if($xmlObjeto->login == $login && $xmlObjeto->senha == $senha ) {
                    echo true ;
                  
                    
                 }
                
        
           
                 }
        
      }
  
}
echo false;



  /*if ($login == $login1  && $senha == $senha1){
    $retorno["Status"]= "sucesso";
    $retorno["mensagem"]="autenticado";
    

  }

  else{

    $retorno["Status"]= "Fail";
    $retorno["mensagem"]= "Login ou senha Incorreto";
  }*/

  // echo $retorno_json = json_encode($ok);


?>