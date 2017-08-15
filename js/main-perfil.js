var sumar = 0;

$(document).ready(function() {
	// mostrar correo de usuario desde Localstorage
	emailStorage();

	// imprimir tarjetas guardadas
	mostrarCards();

	// nuevas tarjetas bip
	$("#calcular_saldo").click(function(event) {
		sumar++;
		var ingresoBip = $("#ingresenumero").val();
		console.log("Tarjeta n°: " + sumar);
		console.log("N° bip: " + ingresoBip);

		// Nuevo número de tarjeta
		$(".list-group").append('<li class="list-group-item" id="tarjeta' + sumar + '">' + ingresoBip  + '</li>');
		$("#guardado").append('<option id="tarjeta' + sumar + '" value="' + ingresoBip  + '">' + ingresoBip  + '</option>');
		localStorage.setItem('numeroTarjeta', $('.list-group').html());
		localStorage.setItem('bipStorage', $('#guardado').html());
		event.preventDefault();
		$("#ingresenumero").val("");
	});
});

function emailStorage() {
	if (localStorage.email != "") {
		$("#correoElectronico").html(localStorage.email);
	} else {
		$("#correoElectronico").html("Correo inválido");
	}
}

function mostrarCards() {
	if (localStorage.numeroTarjeta != "") {
		$('.list-group').html(localStorage.getItem('numeroTarjeta'));
		$("#guardado").html(localStorage.getItem('bipStorage'));
	} 
}