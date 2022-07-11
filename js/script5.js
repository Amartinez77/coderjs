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


const URLimg = 'https://image.tmdb.org/t/p/w500/';



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
 
    return cod;
}

// console.log(cod);



//  funcion que me trae el texto ingresado en la busqueda
let textoBuscar = document.getElementById('inputText');



let txt = '';
textoBuscar.addEventListener('input', () => {


    textoBuscar.value === "" ? txt = "" : txt = textoBuscar.value;

})

const btnBuscar = document.getElementById('botonResultado');
let imprimible = [];
let historial = [];



// creando el array con el historial

const createHistory = (array, cod2) => {

 
    if (cod2 == 1) {
        historial.push({
            id: array.id,
            source: array.poster_path,
            titulo: array.name
        })
    } else {
        historial.push({
            id: array.id,
            source: array.poster_path,
            titulo: array.title
        })
    }

    localStorage.setItem("historial", JSON.stringify(historial));
    
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

        let {
            source,
            titulo,
            name
        } = element;

        let pagina = 'https://image.tmdb.org/t/p/w500';


     
        let div = document.createElement('div')
        div.className = 'card col-md-2'
        div.innerHTML = `
                        
                            <img src = "${pagina}${element.source}" class = "card-img-top" alt = "...">
                            <div class="card-body">
                            <h5 class="card-title">${titulo}</h5>                            
                            </div>

                        `

        divCard3.append(div);

    }


}

const limpiar2 = (array) => {
    while (array.firstChild) {
        array.removeChild(array.firstChild);
    }
}

function borrarDatos(storage) {
    storage.clear();
    storage.removeItem(historial);
}

btnVaciarLocalStorage.addEventListener('click', () => {

    borrarDatos(localStorage);

    borrarDatos(sessionStorage);
    limpiar2(divCard3);
    limpiar(divCard);


});






if (historial.length != 0) {
    usuario = JSON.parse(localStorage.getItem('historial'));

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

                let timerInterval
                Swal.fire({
                    title: 'Espere unos instantes',
                    html: 'buscando en nuestra base de datos <b></b> milliseconds.',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading()
                        const b = Swal.getHtmlContainer().querySelector('b')
                        timerInterval = setInterval(() => {
                            b.textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    buscarSeries(URLbuscarSeries + '&query=' + txt);
                    limpiar2(divCard3);
                    if (result.dismiss === Swal.DismissReason.timer) {
                        console.log('I was closed by the timer')
                    }
                })


                break;

            case '2':

                alerta();

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

} else {
    let usuario = JSON.parse(localStorage.getItem('historial'));
}



//  defino las constantes que uso para el uso de la API

const APIKEY = 'api_key=e72726580f0f1f91aad3742a0b9f3c33';
const URLBASE = 'https://api.themoviedb.org/3/';
const URLbuscar = URLBASE + 'search/movie?' + APIKEY;
const URLbuscarSeries = URLBASE + 'search/tv?' + APIKEY;
const URL = URLBASE + 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&' + APIKEY;
// const URLesp = URLbuscar + '&language=es'
const URLesp = URLbuscar + '&language=es-AR';
const URLest = URLBASE + 'discover/movie?' + APIKEY + '&language=es-AR&primary_release_date.gte=2022-05-01&primary_release_date.lte=2022-06-25';
const URLpreg = URLBASE + 'discover/movie?' + APIKEY + '&language=es-AR&';
const URLpregSerie = URLBASE + 'discover/tv?' + APIKEY + '&language=es-AR&';
const URLestr = URLpreg + 'primary_release_year=2022';
const URLpSeries = URLpregSerie + 'sort_by=popularity.desc';
// https://api.themoviedb.org/3/discover/tv?api_key=e72726580f0f1f91aad3742a0b9f3c33&language=es-AR&&sort_by=popularity.desc

const URLplay = URLBASE + 'movie/';



//  funciones que realizan el fetch

function buscarPeliculas(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            mostrar(response.results);

            filtrarPeliculas(txt, response.results);
        })
}

function buscarSeries(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {
            mostrarSeries(response.results);
            filtrarSeries(txt, response.results);
        })
}



let divPeliculas = document.getElementById('sectionEst');
let divSeries2 = document.getElementById('sectionSeries');

function estrenos2022(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {


            url == URLestr ? mostrarEstreno(data, divPeliculas) : mostrarEstreno(data, divSeries2)

        })
}







function buscarProvedor(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {

            mostrarProv(response.results);
            createHistory(response.results);

            return response.results;
        })
}

let divReco = document.getElementById('recomend');

// funcion que muestra peliculas relacionadas

function mostrar(datos) {

    divReco.innerHTML = '';
    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>busquedas relacionadas</h3> `
    divReco.append(titulos);


    datos.forEach(element => {
        let {
            title,
            poster_path,
        } = element;

        let titu = document.createElement('div');
        titu.classList.add('card', 'col-md-3');
        titu.innerHTML = ` <img src="${URLimg}${poster_path}" alt="">
                                    <h3>${title}</h3> 
                                    
                                    `

        divReco.append(titu);


    });

}





// funcion que hace el filtrado de peliculas 

const filtrarPeliculas = (texto, array) => {

    var arr = Object.keys(array).map(function (key) {
        return [Number(key), array[key]];
    });


    const filtrado = array.filter((title) => array[0].title.toLowerCase().includes(texto.toLowerCase()));

    const filtrado3 = array.find(titulo => titulo.title.toLowerCase === (texto.toLowerCase));

    if (Object.entries(filtrado3).length > 0) {


        mostrarFiltrado(filtrado3, cod2);
        createHistory(filtrado3, cod2);

    } else {
        alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
    }

}

let divReco5 = document.getElementById('busqueda');


// funcion que muestra la serie ya filtrada

function mostrarFiltrado(datos, cod2) {
    
    divReco5.innerHTML = '';

    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>resultado de tu busqueda</h3> `
    divReco5.append(titulos);

    if (cod2 == 1) {
        let {
            name,
            poster_path,
        } = datos;

        let titu = document.createElement('div');
        titu.classList.add('card', 'col-md-3');
        titu.innerHTML = ` <img src="${URLimg}${poster_path}" alt="">
                                    <h3>${name}</h3> 
                                    
                                    `

        divReco5.append(titu);
    } else {
        let {
            title,
            poster_path,
        } = datos;

        let titu = document.createElement('div');
        titu.classList.add('card', 'col-md-3');
        titu.innerHTML = ` <img src="${URLimg}${poster_path}" alt="">
                                    <h3>${title}</h3> 
                                    
                                    `

        divReco5.append(titu);
    }

};


//  funcion que muestra las series relacionadas con la busqueda

function mostrarSeries(datos) {
  
    divReco.innerHTML = '';
    let titulos = document.createElement('h3')
    titulos.className = 'text-center'
    titulos.innerHTML = ` <h3>busquedas relacionadas</h3> `
    divReco.append(titulos);


    datos.forEach(element => {
        let {
            name,
            poster_path,
        } = element;


        let titu = document.createElement('div');
        titu.classList.add('card', 'col-md-2');
        titu.innerHTML = ` <img src="${URLimg}${poster_path}" alt="">
                                    <h3>${name}</h3> 
                                    
                                    `

        divReco.append(titu);


    });

}


// funcion que hace el filtrado de las series

const filtrarSeries = (texto, array) => {

    var arr = Object.keys(array).map(function (key) {
        return [Number(key), array[key]];
    });



    console.log(array.find(titulo => titulo.name.toLowerCase === (texto.toLowerCase)));
    const filtrado3 = array.find(titulo => titulo.name.toLowerCase === (texto.toLowerCase));

    if (Object.entries(filtrado3).length > 0) {

        mostrarFiltrado(filtrado3, cod2);
        createHistory(filtrado3, cod2);
  


    } else {
        alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
    }

}

//  funcion que carga un loader...

function alerta() {
    let timerInterval
    Swal.fire({
        title: 'Espere unos instantes',
        html: 'buscando en nuestra base de datos <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        buscarPeliculas(URLesp + '&query=' + txt);
        limpiar2(divCard3);
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })

}


// busqueda de peliculas que se muestran en el slider
// buscarEst2(URLest);

function buscarEst2(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            ggg(data);

        })
}




// funcion que crea el slider del inicio

let divEst = document.getElementById('fotos')
let contC = document.getElementById('contCarrusel')

function ggg(data) {

    let div1 = document.createElement('div');
    div1.className = 'glider-contain';
    divEst.append(div1);
    let div2 = document.createElement('div')
    div2.className = 'glider';
    div1.appendChild(div2);


    data.results.forEach(element => {
        let {
            title,
            poster_path,
        } = element;
       
        let pagina = 'https://image.tmdb.org/t/p/w500';

        let div = document.createElement('div');
        // div.className = 'fotosDiv';
        div.innerHTML = ` <img src="${pagina}${poster_path}" class = "w-100 h-100" alt="">
                                    
                                    `
    
        div2.append(div);

    });



    // contC.append(div3);

    new Glider(document.querySelector('.glider'), {
        slidesToShow: 5,
        slidesToScroll: 5,
        draggable: true,
        duration: 0.5,
        scrollLock: true,
        scrollLockDelay: 250,
        dots: '.dots',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });


}

buscarEst2(URLest);

//  funcion que crea los card del unicio con peliculas y estrenos, ademas crea el overlay 
function mostrarEstreno(datos, ub) {

    let pagina = 'https://image.tmdb.org/t/p/w500';

    datos.results.forEach(element => {

        let pelicula = datos.results;

        if (ub == divPeliculas) {
            let {
                title,
                poster_path,
                overview,
                vote_average,
                id,
            } = element;
        
            let div = document.createElement('div');
            div.className = ' col-md-3 col-sm-3 col-6 mb-2 peliculas';
            div.innerHTML = `
                                        <img src = "${pagina}${poster_path}" class = "card-img-top w-100" alt = "...">
                                        
                                        <div class="overview">
                                            <h3>${title}</h3>
                                            <h4>${overview}</h4>
                                            <h5>${vote_average} <span><a href="#" class="play" id="${id}"><i class="fa-solid fa-circle-play"></i></a></span></h5>
                                            
                                        </div>
                                    `
        

            ub.append(div);

            document.getElementById(id).addEventListener('click', () => {
         
                play(id, pelicula)

            })



        } else {
            let {
                name,
                poster_path,
                overview,
                vote_average,
            } = element;
        
            let div = document.createElement('div');
            div.className = ' col-md-3 col-sm-3 col-6 mb-2 peliculas';
            div.innerHTML = `
                                                <img src = "${pagina}${poster_path}" class = "card-img-top w-100" alt = "...">
                                                <div class="overview">
                                                    <h3>${name}</h3>
                                                    <h4>${overview}</h4>
                                                    <h5>${vote_average}</h5>
                                                </div>
                                    `


            ub.append(div);

        }

    });

}

//  funcion que busca el trailer de las peliculas

function play(id, pelicula) {

    let pagina = URLplay + id + '/videos?' + APIKEY + '&language=es-AR';


    fetch(pagina)
        .then(response => response.json())
        .then(datos => {
    
            openNav(datos, pelicula, id)
        })






}

/* funcion que hace el overlay de w3school */
function openNav(datos, pelicula, id) {
    document.getElementById("myNav").style.width = "100%";
    let div = document.getElementById('contenido');
    div.innerHTML = '';


    let datosPelicula = pelicula.filter(iden => iden.id == id);
  

    let sinop = datosPelicula.overview



    let trailer = datos.results.filter(trailer => trailer.type == "Trailer");


    trailer.forEach(element => {
        let {
            key,
            name,
        } = element;

        datosPelicula.forEach(element => {
            let {
                title,
                overview,
                vote_average,
                id,
            } = element;

            const descrip = element.overview


            let div2 = document.createElement('div');

            div2.innerHTML = `
                                                <div class="container">
                                                    <div class="card mb-3 videoResp">
                                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                                        <div class="card-body">
                                                            <h5 class="card-title">${name}</h5>
                                                            <p class="card-text">Sinopsis: ${overview}</p>
                                                            <p class="card-text"><small class="text-muted">puntaje IMDB: ${vote_average}</small></p>
                                                            <a href="#" class="${id}"><i class="fa-regular fa-heart"></i></a>
                                                        </div>
                                                    </div>
                                                        
                                                </div>
                                                `

            div.append(div2);

        })

    });

}



/* funcion que cierra el overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
//  llamando a las funciones que muestran los estrenos en el inicio
estrenos2022(URLestr);
estrenos2022(URLpSeries);



//  funcion que cambia de color la nav al hacer scroll
const navColor = document.querySelector('.navC');

window.onscroll = function () {
    let pos = window.scrollY;
    console.log(pos);
    if (pos >= 100) {

        navColor.classList.add('navC2');

    } else {
        navColor.classList.remove('navC2');
    }
}