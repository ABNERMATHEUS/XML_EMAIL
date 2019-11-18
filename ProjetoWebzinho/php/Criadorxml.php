<?php 



$desti= trim($_POST["desti"]);
$assunto= trim($_POST["assunto"]);
$texto = trim($_POST["texto"]);


$xml= new DOMDocument("1.0");//Criação de um documento XML
$xml_raiz=$xml->createElement("raiz");
$xml_destinatario= $xml->createElement("destinatario",$desti);
$xml_assunto= $xml->createElement("assunto",$assunto);
$xml_texto = $xml->createElement("texto",$texto);


$xml_raiz->appendChild($xml_destinatario);
$xml_raiz->appendChild($xml_assunto);
$xml_raiz->appendChild($xml_texto);
$xml->appendChild($xml_raiz);

$data = date("Y_m_d_h_i_s");
$local = ("../xml/"."/xmlSaida//".$data."(".$desti.")".".xml");  ///TENTAR VER UM HASH PARA CADA EMAIL SALVAR


$xml->save($local);






$retorno="Enviado com sucesso"; //Como eu não estou usando várias "Mensagem de retorno " não precisa usar um vetor para indeitficar cada uma 

//RETORNO PARA O JSON 
//||||
//vvvv
echo json_encode($retorno);


//Sempre usar ; para tudo, é igual o PHP;











?>