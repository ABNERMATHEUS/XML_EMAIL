<?php 



$login= trim($_POST["login"]);
$senha= trim($_POST["senha"]);

$xml= new DOMDocument("1.0");
$xml_raiz=$xml->createElement("raiz");
$xml_login= $xml->createElement("login",$login);
$xml_senha= $xml->createElement("senha",$senha);
$xml_raiz->appendChild($xml_login);
$xml_raiz->appendChild($xml_senha);
$xml->appendChild($xml_raiz);

$local = ("../xml/"."/xmlLogin//".$login.".xml");  ///TENTAR VER UM HASH PARA CADA EMAIL SALVAR


$xml->save($local);

echo true;