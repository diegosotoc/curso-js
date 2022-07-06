const lista1 = [
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    4,
    6,
];





function calcularModa(lista) {

    const listaObjeto = {};

    // Convierte un objeto en un array
    // Mapea las veces que se repiten estos numeros
    lista.map( 
        function(elemento){
            if (listaObjeto[elemento]){
                listaObjeto[elemento] += 1;
                
            } else {
                listaObjeto[elemento] = 1;
            }
        }
    );
    
    // Hace un sort 
    const listaArray = Object.entries(listaObjeto).sort(
        (a,b) => a[1] - b[1]
    );

    // const listaArray2 = Object.entries(listaObjeto).sort(
    //     function (a,b){
    //         return a[1] - b[2];
    //     }
    // );
    
    let moda = listaArray[listaArray.length-1];

    return moda;
}