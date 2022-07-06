const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];


function calcularPonderado(notas) {

    // array de las notas y creditos
    let arrayNotasYCredito = notas.map(
        function (notasObjeto){
            return notasObjeto.note * notasObjeto.credit;
        }
    )

    let arrayCreditos = notas.map(
        function (notasObjeto){
            return notasObjeto.credit;
        }
    )
    
    let sumaPonderados =  0;
    let sumaCreditos =  0;

    for (const i of arrayNotasYCredito){
        sumaPonderados+= i;
    }

    for (const j of arrayCreditos){
        sumaCreditos+= j;
    }

    return sumaPonderados / sumaCreditos;
}