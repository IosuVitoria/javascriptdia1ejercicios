//Usa un foin para imprimir por consola los datos del alienigena.


const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for(const propiedad in alien){
    console.log(alien[propiedad]);
}