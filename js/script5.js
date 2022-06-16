//  constructor de series, en teoria voy a usar una API

class Serie {
    constructor(titulo, temporadas, genero, source, id) {
        this.id = id;
        this.titulo = titulo;
        this.temporadas = temporadas;
        this.genero = genero;
        this.source = source;
    }
    asignarId(array) {
        this.id = array.length;
    }

}

//  constructor de peliculas, en teoria voy a usar una API
class Pelicula {
    constructor(titulo, anio, genero, source, id) {
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
        this.source = source;
    }
    asignarId(array) {
        this.id = array.length;
    }

}

// array de series , es diferente al de peliculas, tiene otros elementos

const series = [
    new Serie("Lost", 6, "misterio", "./image/lost.webp", 1),
    new Serie("friends", 10, "comedia", "./image/friends.webp", 2),
    new Serie("The walking Dead", 11, "terror", "./image/walkingdead.jpg", 3),
    new Serie("True Detective", 3, "drama", "./image/truedetective.webp", 4)
]

const peliculas = [
    new Pelicula("The Joker", 2019, "drama", "./image/joker.webp", 1),
    new Pelicula("Nadie", 2021, "suspenso", "./image/nobody.webp", 2),
    new Pelicula("El resplandor", 1980, "terror", "./image/reesplandor.webp", 3),
    new Pelicula("Busqueda Implacable", 2008, "accion", "./image/taken.webp", 4)
]

const pedidos = [];

const busqReciente = [];
const busqReciente2 = [];

console.log(series);
console.log(peliculas);

let divCard = document.getElementById('contenedorPelis');

//  funcion que crea las cards con los array de peliculas y series
const faraday = (array) => {
    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>resultados que coinciden con su busqueda</h3> `
    divCard.append(titulos);

    for (const element of array) {

        let div = document.createElement('div')
        div.className = 'card col-md-6'
        div.innerHTML = `
                        
                            <img src="${element.source}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${element.titulo}</h5>
                            <p class="card-text">Calidad FullHD.</p>
                            <a href="#" class="btn btn-primary">ver online</a>
                            </div>

                        `
        console.log(div);
        divCard.append(div);

    }

}


const limpiar = (divCard) => {

    while (divCard.firstChild) {
        divCard.removeChild(divCard.firstChild);
    }
}




//  funcion que me trae el la opcion del value del select del html

let cod2 = "";

function selectHtml() {
    /* Para obtener el valor */
    let cod = document.getElementById("pppp").value;
    cod2 = cod;
    console.log(cod);
    console.log(cod2);

    return cod;
}

// console.log(cod);



//  funcion que me trae el texto ingresado en la busqueda
let textoBuscar = document.getElementById('inputText');

console.log();



let txt = '';
textoBuscar.addEventListener('input', () => {
    console.log(textoBuscar.value);

    // if (textoBuscar.value ==="") {
    //     alert('ingresa una busqueda')
    //     txt="";
    // } else {
    //     txt = textoBuscar.value;
    // }

    //  

    textoBuscar.value === "" ? txt = "" : txt = textoBuscar.value;






})




const btnBuscar = document.getElementById('botonResultado');


let imprimible = [];

// funcion que hace el filtrado 

const filtrar = (texto, array) => {

    const filtrado = array.filter((titulo) => titulo.titulo.toLowerCase().includes(texto.toLowerCase()));

    if (filtrado.length > 0) {
        imprimible = filtrado.map((titulo) => titulo.titulo);
        alert("Las series que se ajustan a tu busqueda son:\n- " + imprimible.join('\n- '));
        limpiar(divCard);
        faraday(filtrado);
        createHistory(filtrado);
        console.log(filtrado);


    } else {
        alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
    }

}


let historial = [];



// creando el array con el historial
const createHistory = (array) => {
    // let cart = [];

    //  if (historial == 0) {
    console.log(historial);

    for (const product of array) {
        historial.push({
            id: product.id,
            titulo: product.titulo,
            temporadas: product.temporadas,
            genero: product.genero,
            source: product.source,
            largo: 0,

        })
    }

    localStorage.setItem("historial", JSON.stringify(historial));
    console.log(JSON.stringify(historial));
}




//  el evento que se produce al hacer click al boton

let divCard3 = document.getElementById('contHistorial');

const mostrarRecientes = (array) => {


    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>Historial de busqueda</h3> `
    divCard3.append(titulos);


    for (const element of array) {


        //  aplicando destructuracion

        let {source, titulo} = element;

        
        console.log("el source", source);
        console.log("el titulo", titulo);


        console.log(element.titulo);
        let div = document.createElement('div')
        div.className = 'card col-md-4'
        div.innerHTML = `
                        
                            <img src="${source}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${titulo}</h5>
                            <p class="card-text">Calidad FullHD.</p>
                            <a href="#" class="btn btn-primary">ver online</a>
                            </div>

                        `
        console.log(div);
        divCard3.append(div);

    }


}

const limpiar2 = (array) => {
    while (array.firstChild) {
        array.removeChild(array.firstChild);
    }
}

function borrarDatos(storage) {
    storage.clear()
}

btnVaciarLocalStorage.addEventListener('click', () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
    limpiar2(divCard3);
    limpiar(divCard);


});




console.log(historial);

if (historial.length != 0) {
    usuario = JSON.parse(localStorage.getItem('historial'));
    console.log(usuario);
    mostrarRecientes(usuario);

}






// eventos del boton buscar

btnBuscar.addEventListener('click', () => {
    if (txt == "") {

        // libreria sweet alert 2

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tienes que completar los campos!',
            footer: '<<  BuscaTuPeli.com  >>'
        })
    } else {
        switch (cod2) {
            case '1':
                // console.log(txt);
                filtrar(txt, series);
                // console.log(imprimible);


                limpiar2(divCard3);
                let usuario = JSON.parse(localStorage.getItem('historial'));
                // console.log(historial);
                mostrarRecientes(usuario);


                break;

            case '2':

                filtrar(txt, peliculas);

                limpiar2(divCard3);
                let usuario2 = JSON.parse(localStorage.getItem('historial'));
                // console.log(historial);
                mostrarRecientes(usuario2);


                break;

            default:
                break;
        }
    }

})


//  verifica que el localStore no este vacio 
if (localStorage.length > 0) {
    historial = JSON.parse(localStorage.getItem('historial'));
    mostrarRecientes(historial);

}