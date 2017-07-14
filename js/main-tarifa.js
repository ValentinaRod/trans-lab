$(document).ready(function(){
	$("#calculosaldo").on("click", function(){
		var saldoFinal = $("#guardarsaldo").val();
        console.log*saldoFinal;
    $.ajax({
            url: 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + saldoFinal, 
            type: 'GET',
            datatype: 'JSON',
            
        })

        .done(function(response){
        	$(".saldoTarjeta").append("<div>"+ response.saldoTarjeta + "</div>")
            console.log(response.saldoTarjeta);
        })

        .fail(function(error){
            console.log("error");
        })
    });
	
    });


