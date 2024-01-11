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
