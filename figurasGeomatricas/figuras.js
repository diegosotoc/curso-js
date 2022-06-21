
// Codigo del cuadrado 
console.group("Cuadrados");


    function perimetroCuadrado(lado){
        return   lado * 4;
    }

    console.log("Perimetro del cuadrado: "+ perimetroCuadrado(4)+" cm");

    function areaCuadrado(lado) {
        return lado * lado;
    }

    console.log("Area cuadrado: "+ areaCuadrado(5)+" cm^2");

console.groupEnd();


// Codigo del triangulo

console.group("Triangulos");

    const alturaTriangulo = 5.5;


    function perimetroTriangulo(lado1,lado2,base) {
        return lado1+lado2+base;
    }
    console.log(`El perimetro del triangulo es: ${perimetroTriangulo(6,6,4)} cm`);

    console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);


    function areaTriangulo(base,altura) {
        return (base*altura)/2;
    }
    console.log(`El area del triangulo es: ${areaTriangulo(4,5.5)} cm^2`);


    // console.log(
    //     "Los lados del triangulo miden: "
    //     + ladoTriangulo1 + " cm, " 
    //     + ladoTriangulo2 + " cm, y la base mide: "
    //     + baseTriangulo + " cm");

console.groupEnd();



// Codigo del circulo
console.group("Circulos");

    const PI = Math.PI;



    function diametroCirculo(radio) {
        return radio*2;
    }
    console.log(`El circulo tiene un diametro de ${diametroCirculo(5)} cm`);


    function perimetroCirculo(radio) {
        return diametroCirculo(radio) * PI;
    }
    console.log(`El circulo tiene un perimetro de ${perimetroCirculo(5)} cm`);



    function areaCirculo(radioCirculo) {
        return (radioCirculo*radioCirculo) * PI;
    }
    console.log(`El circulo tiene una area de ${areaCirculo(5)} cm^2` );

console.groupEnd();

