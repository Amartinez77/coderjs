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
    new Serie("Lost", 6, "misterio", "../image/lost.webp", 1),
    new Serie("friends", 10, "comedia", "../image/friends.webp", 2),
    new Serie("The walking Dead", 11, "terror", "../image/walkingdead.jpg", 3),
    new Serie("True Detective", 3, "drama", "../image/truedetective.webp", 4)
]

const peliculas = [
    new Pelicula("The Joker", 2019, "drama", "../image/joker.webp", 1),
    new Pelicula("Nadie", 2021, "suspenso", "../image/nobody.webp", 2),
    new Pelicula("El resplandor", 1980, "terror", "../image/reesplandor.webp", 3),
    new Pelicula("Busqueda Implacable", 2008, "accion", "../image/taken.webp", 4)
]

const pedidos = [];

const busqReciente = [];

console.log(series);
console.log(peliculas);

let divCard = document.getElementById('contenedorPelis');

//  funcion que crea las cards con los array de peliculas y series
const faraday = (array) => {
    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>resultados</h3> `
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

// localStorage.setItem("palabras", JSON.stringify(textoBuscar));
console.log();

let txt = '';
textoBuscar.onchange = () => {

    txt = textoBuscar.value;

    console.log(txt);
}





const btnBuscar = document.getElementById('botonResultado');

// funcion que hace el filtrado 

const filtrar = (texto, array) => {

    const filtrado = array.filter((titulo) => titulo.titulo.toLowerCase().includes(texto.toLowerCase()));

    if (filtrado.length > 0) {
        const imprimible = filtrado.map((titulo) => titulo.titulo);
        alert("Las series que se ajustan a tu busqueda son:\n- " + imprimible.join('\n- '));
        limpiar(divCard);
        faraday(filtrado);
    } else {
        alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
    }

}

//  el evento que se produce al hacer click al boton

let contenedorRecientes = document.getElementById('recientes');

const mostrarRecientes = (array) => {
    // let contenedorRecientes = document.getElementsByClassName('recientes');

    let titulos2 = document.createElement('h3')
    titulos2.className = 'izq'
    titulos2.innerHTML = ` <span>tus busquedas recientes:  </span> `
    contenedorRecientes.append(titulos2);
    for (const element of array) {

        let spann = document.createElement('span')
        spann.className = 'text-center'
        spann.innerHTML = `
                        
                            
                            
                            ${element}
                            
                            

                        `
        console.log(spann);
        contenedorRecientes.append(spann);

    }



    // if (array != 0) {
    //     array.forEach(element => {
            // let elements = ``;
            // if (element.type == 'coffee') {
        //     elements += `
        //         tus busquedas recientes ${element}
                
                
                
            
        // //     `;
        //     // }
        //     // en el boton guardamos el id del producto para luego reconocerlo en el evento click   
        //     let h33 = document.createElement("span")
        //     h33.setAttribute("class", "text-center");
        //     h33.innerHTML = ` ${elements} `;
        //     contenedorRecientes[0].appendChild(h33);
        //     console.log(contenedorRecientes);
        // });
        // for (const element of array) {

        // }
        // cargar los eventos //


    // }
}

const limpiar2 = (array) => {
    alert("hola", array);

    while (array.firstChild) {
        array.removeChild(array.firstChild);
    }
}








btnBuscar.addEventListener('click', () => {

    switch (cod2) {
        case '1':
            filtrar(txt, series);



            busqReciente.push(txt)
            localStorage.setItem("palabras", JSON.stringify(busqReciente));
            // let contenedorRecientes = document.getElementsByClassName('recientes');
            limpiar2(contenedorRecientes);
            mostrarRecientes(busqReciente);


            break;

        case '2':

            filtrar(txt, peliculas);
            localStorage.setItem("palabras", JSON.stringify(txt));



            break;

        default:
            break;
    }

})

let arrayBreciente = localStorage.getItem(busqReciente)

console.log(busqReciente);