$(document).ready(function(){
    EnviarXML();

});






function EnviarXML(){
    $("#butaoEnviar").click(function(){

    var desti = $("#destinatario").val();
    var assunto = $("#assunto").val();
    var texto = $("#texto").val();

        $.ajax({

            type:"POST",
            url: "../php/Criadorxml.php",
            dataType: "json",
            data:{
                desti:desti,
                assunto:assunto,
                texto:texto


            },
            success : function(retorno){
                
                
                $("#status").html(retorno);
                window.location.href="EntradaEmail.html";

                

                

            }
         



        })



    });

}


