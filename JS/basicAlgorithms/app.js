/*Iteración #1: Variables*/
//!------------------------------------------------------------------------------------------
//1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
//!-------------------------------------------------------------------------------------------
let myFavoriteHero = "Hulk";

//!------------------------------------------------------------------------------------------
//1.2 Crea una variable llamada x, asigna el valor 50 a ella.
//!-------------------------------------------------------------------------------------------
let x = 50;

//?-------------------------------------------------------------------------------------------
//1.3 Crea una variable llamada 'h' con el valor 5 y otra 'y' con el valor 10.
//?-------------------------------------------------------------------------------------------
let h = 5;
let y = 10;

//todo-----------------------------------------------------------------------------------------
//1.4 Crea una otra variable 'z' y asignale el valor de 'h' + 'y'.*/
//todo-----------------------------------------------------------------------------------------
let z = "h + y";
console.log(z);

/*Iteración #2: Variables avanzadas*/
//!---------------------------------------------------------------------------------------------
/*1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};*/
//!---------------------------------------------------------------------------------------------
const character = { name: "Jack Sparrow", age: 10 };
character.age = 25;
console.log(character);

//?------------------------------------------------------------------------------------------
/*1.2 Declara 3 variables con los nombres y valores siguientes 
	firstName = 'Jon'; 
	lastName = 'Snow'; 
	age = 24; 
Muestralos por consola de esta forma: 
	'Soy Jon Snow, tengo 24 años y me gustan los lobos.'*/
//?-------------------------------------------------------------------------------------------
let firstName = " Jon ";
let lastName = "Snow ";
let age = 24;
console.log(
  "Soy" + firstName + lastName + "tengo 24 años y me gustan los lobos."
);

//todo------------------------------------------------------------------------------------------
/*1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de
ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};*/
//todo------------------------------------------------------------------------------------------
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };
let result = toy1.price + toy2.price;
console.log(result);

//!---------------------------------------------------------------------------------------------
/*1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000
y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad
basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};*/
//!---------------------------------------------------------------------------------------------
let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice += 15000;
console.log(globalBasePrice);
let car1result = car1.basePrice + globalBasePrice;
let car2result = car2.basePrice + globalBasePrice;
console.log(car1result);
console.log(car2result);

//?---------------------------------------------------------------------------------------------
/*Iteración #3: Operadores*/
/*1.1 Multiplica 10 por 5 y muestra el resultado mediante console.*/
//?---------------------------------------------------------------------------------------------
let a = 10;
a *= 5;
console.log(a);

//todo------------------------------------------------------------------------------------------
/*1.2 Divide 10 por 2 y muestra el resultado en un console.*/
//todo------------------------------------------------------------------------------------------

let b = 10;
b /= 2;
console.log(b);

//!---------------------------------------------------------------------------------------------
/*1.3 Muestra mediante un console el resto de dividir 15 por 9.*/
//!---------------------------------------------------------------------------------------------

let third = 15;
third /= 9;
console.log(third);

//?---------------------------------------------------------------------------------------------
/*1.4 Usa el correcto operador de asignación que resultará en o = 15,
teniendo dos variables p = 10 y j = 5.*/
//?---------------------------------------------------------------------------------------------
let p = 10;
let j = 5;
let o = p + j;
console.log(o);

//todo------------------------------------------------------------------------------------------
/*1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.*/
//todo------------------------------------------------------------------------------------------
let c = 10;
let m = 5;
let i = c * m;
console.log(i);

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
