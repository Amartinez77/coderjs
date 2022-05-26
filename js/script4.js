class Serie {
    constructor(titulo, temporadas, genero, id) {
        this.id = id;
        this.titulo = titulo;
        this.temporadas = temporadas;
        this.genero = genero;
    }
    asignarId(array) {
        this.id = array.length;
    }

}

class Pelicula {
    constructor(titulo, anio, genero, id) {
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.genero = genero;
    }
    asignarId(array) {
        this.id = array.length;
    }

}

const series = [
    new Serie("Lost", 6, "misterio",1),
    new Serie("friends", 10, "comedia",2),
    new Serie("The walking Dead", 11, "terror",3),
    new Serie("True Detective", 3, "drama",4)
]

const peliculas = [
    new Pelicula("The Joker", 2019, "drama",1),
    new Pelicula("Nadie", 2021, "suspenso",2),
    new Pelicula("El resplandor", 1980, "terror",3),
    new Pelicula("Busqueda Implacable", 2008, "accion",4)
]

const pedidos = [];


console.log(series);
console.log(peliculas);



let opc = parseInt(prompt("Ingrese Opcion: 1- buscar series 2- buscar peliculas 3- Agregar pelicula 4- Mostrar peliculas 5- Mostrar series 6- salir"));

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
            let buscarPeli = prompt('Escribí el nombre de la serie asi la buscamos');
            const filtrado2 = peliculas.filter((titulo) => titulo.titulo.toLowerCase().includes(buscarPeli.toLowerCase()));

            if (filtrado2.length > 0) {
                const imprimible2 = filtrado2.map((titulo) => titulo.titulo);
                alert("Las series que se ajustan a tu busqueda son:\n- " + imprimible2.join('\n- '));
            } else {
                alert('Lo sentimos. No encontramos coincidencias en nuestro catálogo')
            }

            break;
        case 3:
            let opc3 = parseInt(prompt("que te gustaria ingresar? 1- peli 2- serie"));
            if (opc3 == 1) {

                let ingreso = prompt("Ingresa la pelicula : titulo, anio, género, separados por una barra diagonal (/)");

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

            }else if (opc3==2) {
                let ingreso = prompt("Ingresa la pelicula : titulo, anio, género, separados por una barra diagonal (/)");

                if (ingreso.toUpperCase() == 'X') {
                    seguir = false;
                    break;
                }

                let datos = ingreso.split('/');
                console.log(datos);
                const seri = new Serie(datos[0], parseInt(datos[1]), datos[2]);
                series.push(seri);
                seri.asignarId(series);

                console.log(series);
            }

            break;

        case 4:
            function mostrar(peliculas) {
                let info = '';
                peliculas.forEach(element => {
                    info += 'Título: ' + element.titulo + '\nAño de publicación: ' + element.anio + '\ngenero: ' + element.genero
                });
                return info;
            }

            alert(mostrar(peliculas));


        case 5:
            function mostrar(series) {
                let info = '';
                series.forEach(element => {
                    info += 'Título: ' + element.titulo + '\nAño de publicación: ' + element.anio + '\ngenero: ' + element.genero
                });
                return info;
            }

            alert(mostrar(series));



        default:
            break;
    }

    opc = parseInt(prompt("Ingrese Opcion: 1- buscar series 2- buscar peliculas 3- Agregar pelicula 4- Mostrar peliculas 5- Mostrar series 6- salir"));
}