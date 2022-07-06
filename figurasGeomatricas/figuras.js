
// Codigo del cuadrado 
console.group("Cuadrados");


    function perimetroCuadrado(lado){
        return   lado * 4;
    }

    // console.log("Perimetro del cuadrado: "+ perimetroCuadrado(4)+" cm");

    function areaCuadrado(lado) {
        return lado * lado;
    }

    // console.log("Area cuadrado: "+ areaCuadrado(5)+" cm^2");

console.groupEnd();


// Codigo del triangulo

console.group("Triangulos");

    const alturaTriangulo = 5.5;


    function perimetroTriangulo(lado1,lado2,base) {
        return lado1+lado2+base;
    }
    // console.log(`El perimetro del triangulo es: ${perimetroTriangulo(6,6,4)} cm`);

    // console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);


    function areaTriangulo(base,altura) {
        return (base*altura)/2;
    }
    // console.log(`El area del triangulo es: ${areaTriangulo(4,5.5)} cm^2`);


    // console.log(
    //     "Los lados del triangulo miden: "
    //     + ladoTriangulo1 + " cm, " 
    //     + ladoTriangulo2 + " cm, y la base mide: "
    //     + baseTriangulo + " cm");

console.groupEnd();



// Codigo del circulo
console.group("Circulos");




    function diametroCirculo(radio) {
        return radio*2;
    }
    // console.log(`El circulo tiene un diametro de ${diametroCirculo(5)} cm`);


    const PI = Math.PI;
    function perimetroCirculo(radio) {

        return diametroCirculo(radio) * PI;
    }
    // console.log(`El circulo tiene un perimetro de ${perimetroCirculo(5)} cm`);



    function areaCirculo(radio){

        return (radio*radio) * PI;
    }
    // console.log(`El circulo tiene una area de ${areaCirculo(5)} cm^2` );

console.groupEnd();



console.group("Isosceles")


function calcularIsosceles(altura1, altura2, base){
    let isosceles = true;
    let h = Math.sqrt((altura1*altura1)-((base*base)/4));

    if ((altura1 === altura2) && (altura1 != base) && (altura2 !=base)) {

        return h;

    } else{
        return !isosceles;
    }
}



console.groupEnd();










// Interactuar con HTML

// Obtener valor del input del HTML
function calcularPerimetroCuadrado(){
    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularPerimetroArea(){

    let input = document.getElementById("inputCuadrado");
    let value = input.value;

    let area = areaCuadrado(value);
    alert(area);
}




function calcularPerimetroTriangulo(){
    let inputL1 = document.getElementById("inputTrianguloL1");
    let inputL2 = document.getElementById("inputTrianguloL2");
    let inputBase = document.getElementById("inputTrianguloBase");

    let valueL1 = inputL1.value;
    let valueL2 = inputL2.value;
    let valueBase= inputBase.value;

    let perimetro = perimetroTriangulo(valueL1,valueL2,valueBase);

    alert(perimetro);

}

function calcularAreaTriangulo(){
    let inputAltura = document.getElementById("inputTrianguloAltura");    let inputL2 = document.getElementById("inputTrianguloL2");
    let inputBase = document.getElementById("inputTrianguloBase");

    let valueAltura = inputAltura.value;
    let valueBase= inputBase.value;
    
    
    let area = areaTriangulo(valueBase,valueAltura);

    alert(area);

}


function calcularPerimetroCirculo() {
    let inputRadio = document.getElementById("inputCirculoRadio");
    let valueRadio = inputRadio.value;
    
    let perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
    
    
}

function calcularAreaCirculo() {
    let inputRadio = document.getElementById("inputCirculoRadio");
    let valueRadio = inputRadio.value;
    
    let area = areaCirculo(valueRadio);
    alert(area);
}

function calcularDiametroCirculo() {

    let inputRadio = document.getElementById("inputCirculoRadio");
    let valueRadio = inputRadio.value;
    
    let diametro = diametroCirculo(valueRadio);
    alert(diametro);
}


function calcularTrianguloIsosceles(lado1,lado2,base) {

    let inputL1 = document.getElementById("inputL1");
    let inputL2 = document.getElementById("inputL2");
    let inputLBase = document.getElementById("inputBase");

    let valueL1 = inputL1.value;
    let valueL2 = inputL2.value;
    let valueBase = inputLBase.value;

    let resultado = calcularIsosceles(valueL1, valueL2, valueBase);
    alert(resultado);
}