// Dado el siguiente javascript usa forof para recorrer el array de películas, genera un nuevo array con las categorías
// de las películas e imprime por consola el array de categorías. Ten en cuenta que las categorías no deberían repetirse.
//Para filtrar las categorías puedes ayudarte de la función `.includes()`.


const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let comedia = [];
let aventura = [];
let thriller = [];
let animacion = [];
let accion = [];

for(const movie of movies){
    if(movie.categories.includes("comedia")){
        comedia.push(movie);
    }
    if(movie.categories.includes("aventura")){
        aventura.push(movie);
    }
    if(movie.categories.includes("thriller")){
        thriller.push(movie);
    }
    if(movie.categories.includes("animación")){
        animacion.push(movie);
    }
    if(movie.categories.includes("acción")){
        accion.push(movie);
    }
}
//Eliges categoría y te las separa
console.log(comedia);

