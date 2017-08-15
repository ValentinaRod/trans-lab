$(document).ready(function() {
    bipGuardo();

    $("#versaldo").click(function(event) {
        event.preventDefault();

        if ( $("#ingresenumero").val() != "" && $("#tarjetaguardada").val() == null ) {
            var valor = $("#ingresenumero").val();
            console.log(valor);
        } else if ( $("#ingresenumero").val() == "" && $("#tarjetaguardada").val() != null ) {
            var valor = $("#tarjetaguardada").val();
            console.log(valor);
        }

        $.ajax({
            url : 'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json',
            type : 'GET',
            datatype : 'json',
            data : {'bip': valor}
        })
        .done(function(respuesta){
            console.log("success");
            console.log(respuesta);
            saldo(respuesta);
        })
        .fail(function(){
            console.log("error");
            alert("Ingrese una tarjeta");
        })
    });

});
function saldo(respuesta) {
    var caja = $("<div>").addClass('caja');
    var cajita1 = $("<div>").addClass('cajita1');
    var decirSaldo = $("<p>").addClass('decirSaldo').text('Tu Saldo total es');
    var cajita2 = $("<div>").addClass('cajita2');
    var saldo = $("<span>").text(respuesta.saldoTarjeta);
    cajita1.append(decirSaldo);
    cajita2.append(saldo);
    caja.append(cajita1);
    caja.append(cajita2);
    $("#total_saldo").html(caja);

    } 




function bipGuardo() {
    if (localStorage.bipStorage != "") {
        $(".guardadoStorage").append(localStorage.getItem('bipStorage'));

    }
}
