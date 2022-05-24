r = 0;
r2 = 0;




let opc = parseInt(prompt("Ingrese opción 1-sumar 2-restar 3-multiplicar 4-dividir 5- mostrar resultados 6-salir"));

function ingresarNro() {
    return parseInt(prompt("ingrese un nro"));
}




function suma(nro1, nro2) {
    r = nro1 + nro2;
}

function resta(nro1, nro2) {
    r = nro1 - nro2;
}

function multiplicar(nro1, nro2) {
    r = nro1 * nro2;
}

function dividir(nro1, nro2) {
    r = nro1 / nro2;
}

function verificar(nro2) {

    if (nro2 != 0) {
        r2 = 1;
    } else {
        r2 = 0;
    }

}

class calculos {
    constructor(nro1, nro2, r, id) {
        this.id = id;
        this.nro1 = nro1;
        this.nro2 = nro2;
        this.r = r;

    }
    asignarId(array) {
        this.id = array.length;
    }

}

const resultados = [
    new calculos('primer numero', 'segundo nro', 'resultado', 0)
];

console.log(resultados);


while (opc != 6) {

    if (opc == 1) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        suma(nro1, nro2);
        console.log("el resultado es " + r);


        const resultados2 = new calculos(nro1, nro2, r);


        resultados.push(resultados2);
        resultados2.asignarId(resultados);



    } else if (opc == 2) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        resta(nro1, nro2);
        console.log("el resultado es " + r);

        const resultados2 = new calculos(nro1, nro2, r);


        resultados.push(resultados2);
        resultados2.asignarId(resultados);

    } else if (opc == 3) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        multiplicar(nro1, nro2);
        console.log("el resultado es " + r);

        const resultados2 = new calculos(nro1, nro2, r);


        resultados.push(resultados2);
        resultados2.asignarId(resultados);

    } else if (opc == 4) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();
        verificar(nro2);

        console.log(verificar);

        if (r2 == 1) {

            dividir(nro1, nro2);
            console.log("el resultado es " + r);
            const resultados2 = new calculos(nro1, nro2, r);


            resultados.push(resultados2);
            resultados2.asignarId(resultados);
        } else {
            console.log("no se puede dividir por 0");
        }



    } else if (opc == 5) {
        alert("el primer objeto del array es solo de ejemplo")

        function mostrar(array) {
            let info = '';
            array.forEach(element => {
                info += 'nro1: ' + element.nro1 + '\nnro2: ' + element.nro2 + '\nresultado: ' + element.r + '\n'
            });
            return info;
        }


        alert(mostrar(resultados));




    } else {

        console.log("error, ingrese la opcion correcta");

    }

    opc = parseInt(prompt("Ingrese opción 1-sumar 2-restar 3-multiplicar 4-dividir 5-mostrar resultados 6-salir "));
}