$(document).ready(function(){
    $("#novaMensagem").click(function(){
      
        EnviarMensagem();

    });
    CarregarEmail();


});



function EnviarMensagem(){
   
    window.location.href="EnviarEmail.html"
    

};

function CarregarEmail(){
    $.ajax({
        type:"POST",
        url:"../php/readEntrada.php",
        dataType:"json",
        data:{

        },
         // tipo do meu retorno
        success: function(retorno){
            
            
            for(var i = 0 ; i< retorno.length; i++){
                $("#emaill").append("   <tr><td> "+ "<b>Email: </b>"+retorno[i].email.destinatario+"       "+"<b>Assunto: </b>"+retorno[i].email.assunto+"     "+"<b>texto:  </b>"+retorno[i].email.texto+"</td></tr>");
            
                
            }
            

        },
     


    });
 
  


};