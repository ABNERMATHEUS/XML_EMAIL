
$(document).ready(function(){
    

   fLocalEventClick();
   $("#button1").click(function(){
        window.location.href="Paginas/Cadastrar.Html";
   });


});
function fLocalEventClick(){

        $("#button").click(function(){
            
            $.ajax({

                type:"POST",
                url:"php/autenticacao.php",
                dataType: "json",
                data:{login: $("#Login").val(),
                    senha: $("#Password").val()
                    
                },
                success: function(retorno){
                   console.log("Logado");
                    window.location.href="Paginas/EntradaEmail.Html";
                },
                error: function() {
                  $("#erro").html("Login ou Senha Inválida")
                }
                  
        });

    })

}


    
















