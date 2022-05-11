// muestra la tabla de multiplicar de un nro ingresado hasta el 10

let opt = parseInt(prompt("bienvenido! elige tus opciones: \n1- tablas de multiplicar \n2- salir \n* recuerda presionar F12 para ver los resultados "));

while (opt != 2) {
    if (opt == 1) {

        let x = parseInt(prompt("ingrese un nro positivo y te mostraré su tabla hasta el 10: "));
        if (x > 0) {
            for (let i = 0; i <= 10; i++) {
                let r = (x * i);
                console.log(x + " por " + i + "= " + r);

            }
        } else {
            alert("Recuerda que debes igresar un NÚMERO POSITIVO");
        }

        console.log("gracias!");

    } else if (opt != 1) {
        alert("opcion incorrecta, vuelva a intentarlo");
    }

    opt = parseInt(prompt("Para continuar presiona 1 / para salir 2"));
}