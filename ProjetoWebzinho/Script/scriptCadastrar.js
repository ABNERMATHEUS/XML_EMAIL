
var nome;
var senha;



$(document).ready(function(){
    $("#button").click(function(){
        Cadastrar();

    });

});


function Cadastrar(){

nome = $("#login").val();

if ($("#senha").val() == $("#input").val()){
    senha= $("#senha").val();
    alert("Ok");
    x = new Cadastro(nome,senha);
    window.location.href = "../Login.Html";

    
    
    
    

}
else{
    var html="<h1> Verifique se a senha está correta </h1>";
    $("#erro").html(html);
    
}



}

