
$(document).ready(function(){
    

   fLocalEventClick();
   $("#button1").click(function(){
        window.href="Cadastrar.Html";
   });


});
    


function fLocalEventClick(){

        $("#button").click(function(){
            
            $.ajax({

                type:"POST",
                url:"php/autenticacao.php",
                dataType: "json",
                data:{
                    login: $("#Login").val(),
                    senha: $("#Password").val()
                },
                success: function(retorno){
                    if (retorno.mensagem == 'autenticado'){
                        window.location.href="Paginas/EntradaEmail.html"

                    }
                    else{
                        $("#erro").html(retorno.mensagem);
                    }
                    
                }


                


            });





        });



    }
















