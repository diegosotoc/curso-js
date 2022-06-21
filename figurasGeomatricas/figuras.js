// Codigo del cuadrado
console.group("Cuadrados");


const ladoCuadrado = 5;

console.log("Los lados cuadrado miden: "+ ladoCuadrado +" cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("Perimetro del cuadrado: "+ perimetroCuadrado+" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("Area cuadrado: "+ areaCuadrado+" cm^2");
console.groupEnd();


// Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triangulo miden: "
    + ladoTriangulo1 + " cm, " 
    + ladoTriangulo2 + " cm, y la base mide: "
    + baseTriangulo + " cm");

console.log(`La altura del triangulo es: ${alturaTriangulo} cm`);


const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log(`El area del triangulo es: ${areaTriangulo} cm^2`);
console.groupEnd();



// Codigo del circulo
console.group("Circulos");



const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;

const PI = Math.PI;

const perimetroCirculo = diametroCirculo*PI;

const areaCirculo = PI * (radioCirculo * radioCirculo);

console.log(`El circulo tiene un radio de ${radioCirculo} cm`);
console.log(`El circulo tiene un perimetro de ${perimetroCirculo} cm`);
console.log(`El circulo tiene una area de ${areaCirculo} cm^2` );
console.log(`El circulo tiene un diametro de ${diametroCirculo} cm`);

console.groupEnd();












// // Codigo del rectangulos
// console.group("Rectangulo");
// const ladoRectangulo = 8;
// const baseRectangulo = 4;

// console.log(`La base del rectangulo es ${baseRectangulo}, el lado del rectangulo es ${ladoRectangulo}`);
// console.groupEnd();

