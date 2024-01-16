//?----------------------------------------------------------------------------------------------------
/**Iteración #1: Usa includes**

Haz un bucle y muestra por consola todos aquellos valores del array que incluyan 
la palabra "Camiseta". Usa la función .**_includes_** de javascript.*/
//?----------------------------------------------------------------------------------------------------
console.log("Task 1.1:");
const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
for (let i = 0; i < products.length; i++)
  if (products[i].includes("Camiseta")) {
    console.log(products[i]);
  }
//?-----------------------------------------------------------------------------------------------------
/**Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres 
aprobados y añade la propiedad **_isApproved_** a true o false en 
consecuencia. Una vez lo tengas compruébalo con un **_console.log_**/
//?-----------------------------------------------------------------------------------------------------
console.log("Task 1.2:");

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

//?-----------------------------------------------------------------------------------------------------
/**Iteración #3: Probando For...of*** 
 
Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.
Puedes usar este array: */
//?-----------------------------------------------------------------------------------------------------
console.log("Task 1.3:");

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (let Destination of placesToTravel) {
  console.log(Destination);
}

//?-----------------------------------------------------------------------------------------------------
/**Iteración #4: Probando For...in**

Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/
//?------------------------------------------------------------------------------------------------------
console.log("Task 1.4:");

const alien = {
  name: "Wormuck",
  race: "Cucusumusu",
  planet: "Eden",
  weight: "259kg",
};

for (let clave in alien) {
  console.log("Alien tiene la clave " + clave + " con valor: " + alien[clave]);
}

//?------------------------------------------------------------------------------------------------------
/**Iteración #5: Probando For**

Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y
 40. Imprime en un **_console log_** el array. Puedes usar este array:*/
//?------------------------------------------------------------------------------------------------------
console.log("Task 1.5:");
/*for (let clave in placesToVisit)
  if (placesToVisit[clave] !== 11) {
    console.log(placesToVisit[clave]);
  }*/

const placesToVisit = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const placesFiltered = [];

for (let i = 0; i < placesToVisit.length; i++) {
  const visitedPlaces = placesToVisit[i];
  if (visitedPlaces.id !== 11 && visitedPlaces.id !== 40) {
    placesFiltered.push(visitedPlaces);
  }
}
console.log(placesFiltered);

//?------------------------------------------------------------------------------------------------------
/* Iteración #6: Mixed For...of e includes

Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
Recuerda que puedes usar la función.includes() para comprobarlo.Puedes usar este array:*/
//?------------------------------------------------------------------------------------------------------
console.log("Task 1.6:");

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

//?------------------------------------------------------------------------------------------------------
/* Iteración #7: For...of avanzado
Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más 
de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array: */
//?------------------------------------------------------------------------------------------------------
console.log("Task 1.7");

const popularJuguetes = [];
const Juguetes = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];
