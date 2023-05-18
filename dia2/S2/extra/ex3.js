//Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a
//favorito. Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
//Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

//Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para
//comprender que hay muchas formas de hacer las cosas en javascript.


const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let waves = 0;
let wind = 0;
let firecamp =0;
let train = 0;
let shower =0;
let rain = 0;

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    //console.log(sound) => Verificando que he llamado al sonido en concreto para poder usarlo.
    if (sound === "waves") {
      waves++;
    } else if(sound ==="wind"){
      wind++;
    } else if(sound === "firecamp"){
      firecamp++;
    } else if(sound === "shower"){
      shower++;
    } else if(sound === "rain"){
      rain++;
    }else{
      train++
    }
  }
}

console.log("El sonido waves se ha escuchado " + waves +  " veces.")
console.log("El sonido wind se ha escuchado " + wind +  " veces.")
console.log("El sonido firecamp se ha escuchado " + firecamp +  " veces.")
console.log("El sonido shower se ha escuchado " + shower +  " veces.")
console.log("El sonido rain se ha escuchado " + rain +  " veces.")
console.log("El sonido train se ha escuchado " + train +  " veces.")

