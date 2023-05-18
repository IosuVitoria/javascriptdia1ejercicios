//Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.

const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

//Declaro dos nuevos arrays, uno para los juguetes con "gato"y otro para los que no lo tienen.

const newToys = [];
const newToys2 = [];

for(const element of toys){
    if(element.name.includes("gato")){
        newToys.push(element);
    }
    else{
        newToys2.push(element);
    }
}

console.log(newToys2);
