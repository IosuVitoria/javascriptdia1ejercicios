//Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
//posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

//Haz varios ejemplos y compruebalos.

//Sugerencia de función:

const animalsRiver =  ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

//Razonamiento

//1. Recorrer el array elemento a elemento.
//2. Comparar los elementos con el texto aportado.
//3. La variable i del iterador es mostrada e indica el index del texto aportado.

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === text) {
            console.log(i);
        }
    } 
}
findArrayIndex(animalsRiver, "Caracol");
findArrayIndex(animalsRiver, "Ajolote");
findArrayIndex(animalsRiver, "Salamandra");

