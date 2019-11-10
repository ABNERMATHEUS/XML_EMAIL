<?php

$path="../xml/xmlSaida/"; //Endereço
$diretorio= dir($path); //CRIANDO UM DIRETORIO COM DIR E COLOCANDO A VARIAVÉL DENTRO
$cont=0;


while ( $arquivoXml = $diretorio->read()){
      if ($arquivoXml != "." ){
          if($arquivoXml != ".."){
                $xmlString=file_get_contents($path.$arquivoXml);
                 $xmlObjeto=simplexml_load_string($xmlString);
           
                  


                //abrir o xml  e Fazer varios desses para cada tag colocando em cada matriz
                $ok[$cont]['email']=$xmlObjeto;
                $cont++;
                //$ok[$cont]['assunto']= $xmlObjeto->assunto;
                //$ok[$cont]['texto']=$xmlObjeto->texto;
                

       

          }
        
      }
  


    
}

echo json_encode($ok);


?>