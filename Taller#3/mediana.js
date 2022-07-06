const lista1 = [
   100,
   400000000,
   500,
   200,
];
const lista2 = [
   1000,
   40000,
   200,
   560,
   550,
   510,
];

function calcularMediana(lista) {
   let mediana;
   let elemento1;
   let elemento2;

   // Se ordena la lista de mayor a menor
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

function esPar(mitadL) {

   if (mitadL%2 === 0) {
      return true;
   } else {
      return false;
   }

}