$(document).ready(function(){
	$("#calculosaldo").on("click", function(){
		var saldoFinal = $("#guardarsaldo").val();
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoFinal, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$("#resultado-saldo").append("<div>"+ response.saldoTarjeta + "</div>")
            console.log(response.saldoTarjeta);
        })

        .fail(function(error){
            console.log("error");
        })
    });
	
    });
