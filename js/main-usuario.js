$(document).ready(function() {
    //ingresar un email valido utilizando solo letras , @ numeros etc..
    $(document).on('keypress', '#ingresoemail', function (event) {
        var regex = new RegExp("^[a-z0-9@.]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    
    $(document).on('keypress', '#ingresopassword', function (event) {
        //solo permite caracteres de 8 numeros y de numeros
        var regex = new RegExp("^[0-9]{1,8}$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $("#presionainicio").on("click", function(e){
        var email = $("#ingresoemail").val();
        var password = $("#ingresopassword").val();

        if( email == "" || password == "" ){
            alert("No puede ingresar un campo vacío");
        }
        if( email.indexOf('@') == -1 ){
            alert("Ingrese un correo válido");
        }
        if( password.length > 8 ){
            alert("Su contraseña debe ser máximo 8 caracteres.");
            e.preventDefault();
        }
        if( password != "" && email.indexOf('@') != -1 ){
            localStorage.setItem("email", email);
        } else {
            e.preventDefault();
        }
    });
});