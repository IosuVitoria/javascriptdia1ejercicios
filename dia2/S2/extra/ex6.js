//Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
//intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
//resultante.

//Sugerencia de array:

const players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
const playersSwapped = [];


function swap(array, num1, num2){
    const playersSwapped = [...array]; // Crear una copia del array original

    //Asignar los índices para manejarlos.

    const index1 = num1; 
    const index2 = num2; 
        
    if (index1 !== -1 && index2 !== -1) { // Verificar que los elementos existan en el array y reasignar posiciones en el nuevo array.
        playersSwapped[index1] = array[num2]; 
        playersSwapped[index2] = array[num1];
    }

    console.log(playersSwapped);
}

swap(players, 1 ,2 );