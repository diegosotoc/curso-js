var cupones = ["CUPON40","CUPON50","CUPON60"]


function calcularDescuento(precioOriginal,descuento){
    let precioFinal = (precioOriginal * (100 - descuento))/100;

    return precioFinal;    
}

function verificarCupon(cupon){

    let descuento;

    if (!cupones.includes(cupon)) {
        alert("El cupon que ingresaste no es valido");
    }
    if (cupon === "CUPON40"){
        descuento = 40;
    } else if (cupon === "CUPON50"){
        descuento = 50;
    } else if (cupon === "CUPON60"){
        descuento = 60;
    }
    return descuento;
}

function onClickDescuentos(){
    let inputPrecio = document.getElementById("inputPrice");
    let inputCupon = document.getElementById("inputCupon");

    let valuePrecio = inputPrecio.value;
    let valueCupon = inputCupon.value;

    let valorDescuento = verificarCupon(valueCupon);

    let precioFinal = calcularDescuento(valuePrecio,valorDescuento);

    
    let resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText = `Precio final: ${precioFinal} $`;
    // InnerTest es la forma de escribir en un parrafo HTML en JS

}
