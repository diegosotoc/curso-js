const lista1 = [
    100,
    200,
    300,
    500,
];

// Calcular Media Aritmetica con For
function calcularMediaAritmetica(lista) {
    let sumaL1 = 0;
    
    for (const l of lista) {
        sumaL1+= l;
    }
    
    let promedio = sumaL1 / lista1.length;
    
    return promedio
}


// alert(calcularMediaAritmetica(lista1));

// Calcular Media con el metodo reduce.
function calcularMediaAritmetica2(lista) {

    let promedio = 0;

    const listota = lista.reduce(
        function (acumulado = 0, nuevoValor) {
           return acumulado += nuevoValor;
        }
    )    

     promedio += listota / lista.length;
    
    return promedio 
}

alert(calcularMediaAritmetica2(lista1))



