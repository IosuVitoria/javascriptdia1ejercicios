//Usa un for para remplazar todas las comidas que no sean veganas con las comidas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

// Al declarar food y usar el for cada vez que arranco el bucle llamo a un elemento de foodSchedule. Usando
// la notación del punto puedo acceder a cada una de las propiedades del objeto generado.

for(let i = 0; i<foodSchedule.length; i++){
   const food = foodSchedule[i];
   if(food.isVegan != true){
    food.name=fruits[i];
    food.isVegan=true;
   }

}
console.log(foodSchedule);
 