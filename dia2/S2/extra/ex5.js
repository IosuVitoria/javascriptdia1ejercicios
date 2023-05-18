//Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
//que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
//una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
//información sobre la función de javascript ``Math.random()``


function rollDice(caras){
    //math.floor() Genera un número aleatorio entre 0 y 1. Multiplico por las caras para que llegue a la escala de valores deseada.

    //Le sumo una unidad porque los dados tienen como mínimo un uno en sus caras y con eso hago que esté en ese rango.
    //Uso math.floor para redondear hacia abajo. 
    const numeroAleatorio = Math.floor(Math.random() * caras) + 1;
    return numeroAleatorio;
}

console.log(rollDice(9));

console.log(rollDice(20));