$(document).ready(function() {
	bipGuardo();   //esto es del storage                
	var tarifa;    //primero veo las condiciones de cada caso 

	$("#calcular_tarifa").click(function(event) { //del boton calcular 
		event.preventDefault();

//la condicion cuando se escoge el horario punta , valle o bajo.
		if ( $("#escogeHorario").val() != null ) {
			tarifa = $("#escogehorario").val();
            console.log(tarifa);
    		saldodePasaje();
		} else {
			alert("Escoge la tarifa correspondiente.")
		}

//La condicion que se usa cuando se ingresa el numero . 
		 if ( $("#ingresenumero").val() != "" && $("#tarjetaguardada").val() == null ) {
            var valor = $("#ingresenumero").val();
            console.log(valor);
        } else if ( $("#ingresenumero").val() == "" && $("#tarjetaguardada").val() != null ) {
            var valor = $("#tarjetaguardada").val();
            console.log(valor);
        }

//ahora hago las funcionalidades a partir del ajax. 

		$.ajax({
            url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
            type : 'GET',
            datatype : 'json',
            data : {'bip': valor}
        })
        .done(function(respuesta){
            console.log("success");
            console.log(respuesta);
            saldoFinal(respuesta);
        })
        .fail(function(){
            console.log("error");
			alert("Ingrese algún numero de tarjeta");
        })
	});

});
//el storage
function bipGuardo() {
    if (localStorage.bipStorage != "") {
        $(".guardadoStorage").append(localStorage.getItem('bipStorage'));
	} 
}
//la funcion que me indica el costo del pasaje al escoger el horario del pasaje , me ire el costo del pasaje . 
function saldodePasaje() {
	saldoTarifa = $("#escogeHorario").val();
	var caja = $("<div>").addClass("caja");
	var cajita1 = $("<div>").addClass('cajita1');
    var decirCosto = $("<p>").addClass('decirCosto').text('El costo total es de:');
    var cajita2 = $("<div>").addClass('cajita2');
    var costo = $("<span>").text('$' + saldoTarifa);
    cajita1.append(decirCosto);
    cajita2.append(costo);
    caja.append(cajita1);
    caja.append(cajita2);
    $("#costo_pasaje").html(caja);
}
//la funcion que me da el resultado de restar el costo del pasaje con el horario
function saldoFinal(respuesta) {
	tarifa = $("#escogeHorario").val();

	var sinPeso = respuesta.saldoTarjeta.substr(1);
	console.log(sinPeso);
	var sinPunto = sinPeso.split(".").join("");
	console.log(sinPunto);

	var saldoTotal = parseInt(sinPunto) - parseInt(tarifa);
	console.log(saldoTotal);

	console.log(saldoTotal);
	// Impresión de respuesta
	var caja = $("<div>").addClass('caja');
	var cajita1 = $("<div>").addClass('cajita1');
	var decirSaldoFinal = $("<p>").addClass('decirSaldoFinal').text('El Saldo final es:');
	var cajita2 = $("<div>").addClass('cajita2');
	var final = $("<span>").text("$" + saldoTotal);
	cajita1.append(decirSaldoFinal);
	cajita2.append(final);
	caja.append(cajita1);
	caja.append(cajita2);
    $("#saldo_final").html(caja);

}