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


console.log(series);
console.log(peliculas);

let divCard = document.getElementById('contenedorPelis');
const faraday = (array) => {

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


let opc = parseInt(prompt("Ingrese Opcion: 1- buscar series 2- buscar peliculas 3- Agregar 4- Mostrar peliculas disponibles 5- Mostrar series disponibles 6- salir"));

while (opc != 6) {

    switch (opc) {

        case 1:


            let buscarSerie = prompt('Escribí el nombre de la serie asi la buscamos');
            const filtrado = series.filter((titulo) => titulo.titulo.toLowerCase().includes(buscarSerie.toLowerCase()));

            if (filtrado.length > 0) {
                const imprimible = filtrado.map((titulo) => titulo.titulo);
                alert("Las series que se ajustan a tu busqueda son:\n- " + imprimible.join('\n- '));
            } else {
                alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
            }

            break;

        case 2:
            let buscarPeli = prompt('Escribí el nombre de la pelicula asi la buscamos');
            const filtrado2 = peliculas.filter((titulo) => titulo.titulo.toLowerCase().includes(buscarPeli.toLowerCase()));

            if (filtrado2.length > 0) {
                const imprimible2 = filtrado2.map((titulo) => titulo.titulo);
                alert("Las series que se ajustan a tu busqueda son:\n- " + imprimible2.join('\n- '));
            } else {
                alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
            }

            break;
        case 3:
            let opc3 = parseInt(prompt("que te gustaria ingresar al catalogo? 1- Peliculas 2- Series o ingresa otro numero para salir"));
            if (opc3 == 1) {

                let ingreso = prompt("Ingresa la pelicula : titulo, año y género, separados por una barra diagonal (/) o ingresa x para salir");

                if (ingreso.toUpperCase() == 'X') {
                    seguir = false;
                    break;
                }

                let datos = ingreso.split('/');
                console.log(datos);
                const peli = new Pelicula(datos[0], parseInt(datos[1]), datos[2]);
                peliculas.push(peli);
                peli.asignarId(peliculas);

                console.log(peliculas);

            } else if (opc3 == 2) {
                let ingreso2 = prompt("Ingresa la serie : titulo, temporadas y género, separados por una barra diagonal (/) o ingresa x para salir");

                if (ingreso2.toUpperCase() == 'X') {
                    seguir = false;
                    break;
                }

                let datos2 = ingreso2.split('/');
                console.log(datos2);
                const seri = new Serie(datos2[0], parseInt(datos2[1]), datos2[2]);
                series.push(seri);
                seri.asignarId(series);

                console.log(series);
            } else {
                break;
            }

            break;

        case 4:
            function mostrar(peliculas) {
                let info = '';
                peliculas.forEach(element => {
                    info += 'Título: ' + element.titulo + '\nAño de publicación: ' + element.anio + '\ngenero: ' + element.genero + '\n'
                });
                return info;
            }

            alert(mostrar(peliculas));

      
            faraday(peliculas);

            break;


        case 5:
            function mostrar2(series) {
                let info = '';
                series.forEach(element => {
                    info += 'Título: ' + element.titulo + '\ntemporadas: ' + element.temporadas + '\ngenero: ' + element.genero + '\n'
                });
                return info;
            }

            alert(mostrar2(series));




            faraday(series);

            break;



        default:
            break;
    }

    opc = parseInt(prompt("Ingrese Opcion: 1- buscar series 2- buscar peliculas 3- Agregar 4- Mostrar peliculas disponibles 5- Mostrar series disponibles 6- salir"));
}

