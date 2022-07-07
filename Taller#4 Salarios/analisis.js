const salariosColombia = colombia.map(
    function (persona){
        return persona.salary;
    }
);      

salariosColombia.length

function medianaSalarios(lista) {
    let mediana;
    let elemento1;
    let elemento2;
    
    lista.sort((a, b) => a - b);
    
    let mitadLista = parseInt(lista.length/2);
    
    if (esPar(lista.length)) {
        elemento1 = lista[mitadLista];
        elemento2 = lista[mitadLista-1];
        
        mediana = (elemento1 + elemento2) / lista.length;
    } else {
        mediana = lista[mitadLista];
    }
    
    return mediana;
}


function esPar(num){
    // esto retorna T o F
    return num % 2 === 0;
}


// Mediana 10%

let sliceStart = (salariosColombia.length* 90)/100 ;
let sliceCount = (salariosColombia.length) - sliceStart

const salariosColombiaTop10 = salariosColombia.slice(sliceStart);


console.log(medianaSalarios(salariosColombiaTop10));