//?---------------------------------------------------------------------------------------------------
/**Iteración #5: Filter**

5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18: */

//?---------------------------------------------------------------------------------------------------
console.log("Task 5.1:");

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const biggerAges = ages.filter((ages) => ages > 18);
console.log(biggerAges);

//?---------------------------------------------------------------------------------------------------
/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 5.2:");

const agess = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const pairNumbers = agess.filter((agess) => agess % 2 === 0);
console.log(pairNumbers);

//?---------------------------------------------------------------------------------------------------
/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/

//?---------------------------------------------------------------------------------------------------

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const streamersLeague = streamers.filter(
  (streamers) => streamers.gameMorePlayed === "League of Legends"
);
console.log(streamersLeague);
//?---------------------------------------------------------------------------------------------------
/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.*/
//?---------------------------------------------------------------------------------------------------

const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const streamers2U = streamers2.filter((streamers2) =>
  streamers2.name.includes("u")
);
console.log(streamers2U);
//?---------------------------------------------------------------------------------------------------
/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.*/
//?---------------------------------------------------------------------------------------------------

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
//?---------------------------------------------------------------------------------------------------

const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>


//?---------------------------------------------------------------------------------------------------
/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/
//?---------------------------------------------------------------------------------------------------
const streamers4 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>*/

//?---------------------------------------------------------------------------------------------------

//?---------------------------------------------------------------------------------------------------

//?---------------------------------------------------------------------------------------------------
