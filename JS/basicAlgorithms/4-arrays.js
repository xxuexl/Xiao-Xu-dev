/*Iteración #4: Arrays*/
//!---------------------------------------------------------------------------------------------
/*1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
//!---------------------------------------------------------------------------------------------
console.log("Task 1.1:");
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//?---------------------------------------------------------------------------------------------
/*1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
//?---------------------------------------------------------------------------------------------
console.log("Task 1.2:");
avengers[0] = "IRONMAN";
console.log(avengers[0]);

//todo------------------------------------------------------------------------------------------
/*1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];*/
//todo------------------------------------------------------------------------------------------
console.log("Task 1.3:");
console.log(avengers.length);

//!---------------------------------------------------------------------------------------------
/*1.4 Añade 2 elementos al array: "Morty" y "Summer".
Muestra en consola el último personaje del array
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];*/
//!---------------------------------------------------------------------------------------------
console.log("Task 1.4:");
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);
console.log(rickAndMortyCharacters[4]);

//?---------------------------------------------------------------------------------------------
/*1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/
//?---------------------------------------------------------------------------------------------
console.log("Task 1.5:");
rickAndMortyCharacters = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]);

//todo------------------------------------------------------------------------------------------
/*1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];*/
//todo------------------------------------------------------------------------------------------
console.log("Task 1.6:");
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);
