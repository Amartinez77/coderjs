let opt = parseInt(prompt("bienvenido! elige tus opciones: 1- tablas de multiplicar \n 2- salir "));

while (opt != 2) {
    if (opt = 1) {
        let x = parseInt(prompt("ingrese nro: "));
        for (let i = 0; i < 10; i++) {
            let r = (x * i);
            console.log(x + " por " + i + "= " + r);

        }
    } else {
        if (opt != 1) {
            alert("opcion incorrecta, vuelva a intentarlo");
        }

    }
    opt = parseInt(prompt("bienvenido! elige tus opciones: 1- tablas de multiplicar \n 2- salir "));
}