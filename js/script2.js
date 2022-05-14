r = 0;
r2 = 0;

let opc = parseInt(prompt("Ingrese opción 1-sumar 2-restar 3-multiplicar 4-dividir 5-salir"));

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

while (opc != 5) {

    if (opc == 1) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        suma(nro1, nro2);
        console.log("el resultado es " + r);

    } else if (opc == 2) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        resta(nro1, nro2);
        console.log("el resultado es " + r);

    } else if (opc == 3) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();

        multiplicar(nro1, nro2);
        console.log("el resultado es " + r);

    } else if (opc == 4) {

        let nro1 = ingresarNro();
        let nro2 = ingresarNro();
        verificar(nro2);

        console.log(verificar);

        if (r2 == 1) {

            dividir(nro1, nro2);
            console.log("el resultado es " + r);
        } else {
            console.log("no se puede dividir por 0");
        }



    } else {

        console.log("error, ingrese la opcion correcta");

    }

    opc = parseInt(prompt("Ingrese opción 1-sumar 2-restar 3-multiplicar 4-dividir 5-salir"));
}