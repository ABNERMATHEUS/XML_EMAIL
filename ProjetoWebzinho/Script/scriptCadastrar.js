



$(document).ready(function(){
    $("#button").click(function(){
        Cadastrar();

    });

});


function Cadastrar(){



if ($("#senha").val() == $("#input").val()){
    
    nome = $("#login").val();
    senha= $("#senha").val();
}
else{
    var html="Verifique se a senha está correta";
    $("#erro").html(html);    
}
    $.ajax({

        type:"POST",
        url:"../php/CriadorCadastro.php",
        dataType: "json",
        data:{
            login: nome,
            senha: senha
            
        },
        success: function(){
                      
            window.location.href="../Index.html";
        }
    
    

});
}

