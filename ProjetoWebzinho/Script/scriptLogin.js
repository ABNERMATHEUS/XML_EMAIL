
$(document).ready(function(){
    

   fLocalEventClick();
   $("#button1").click(function(){
        window.href
   });


});
    

/*function login(){
    

    var login = $("#Login").val();
    var password = $("#Password").val();
    
    for ( var i =0; i<banco.length ; i++){
        if (banco[i].login == login && banco[i].password == password)   {

            
            window.location.href ="Paginas/Cadastrar.Html"; 

            
         
        } 

        else{
            var html = "Senha ou Usuario incorreto.";
            $("#erro").html(html);
            $(".input2").addClass("error")
        }
    }



}

function Cadastro(login,senha){
    this.naame= login;
    this.seenha=senha;
    

    }*/



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
















