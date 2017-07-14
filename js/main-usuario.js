$(document).ready(function(){
    /*validar email y nombre*/
    $("#boton1").click(function(e){
        function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         return regex.test(email);
        };
        
        if ($("#email").val() == "") {
            alert("ingresa tu email")
        }
        if (isEmail($("#email").val()) == false ) {
            e.preventDefault();
            alert("tu email no es valido")
        
        }
        if ($("#password").val().length != 8) {
            alert("tu clave debe ser de 8 digitos")
        }
         else {
            e.preventDefault();
            window.location = "index-second-mobile.html";
        }
    });
});