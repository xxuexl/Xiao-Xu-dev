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
console.log("Task 5.3:");

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
console.log("Task 5.4:");

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
console.log("Task 5.5:");
const streamers3 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const legends = streamers3.filter((streamers3) =>
  streamers3.gameMorePlayed.includes("Legends")
);

const streamersYear = legends.map((legends) => {
  if (legends.age > 35) {
    legends.gameMorePlayed = legends.gameMorePlayed.toUpperCase();
  }
  return legends;
});
console.log(streamersYear);

//?---------------------------------------------------------------------------------------------------
/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
//?---------------------------------------------------------------------------------------------------
/* TODAVÍA NO
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
/* TODAVÍA NO

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
//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
//?---------------------------------------------------------------------------------------------------
console.log("Task 6.1:");

const numbers = [32, 21, 63, 95, 100, 67, 43];

const hundred = numbers.find((number) => number === 100);
console.log(hundred);
//?---------------------------------------------------------------------------------------------------
//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
//?---------------------------------------------------------------------------------------------------
console.log("Task 6.2:");
const movies = [
  { title: "Madagascar", stars: 4.5, date: 2015 },
  { title: "Origen", stars: 5, date: 2010 },
  { title: "Your Name", stars: 5, date: 2016 },
];

const movie2010 = movies.find((movie) => movie.date === 2010);
console.log(movie2010);
//?---------------------------------------------------------------------------------------------------
/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 6.3:");

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];
const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const cucu = aliens.find((alien) => alien.name === "Cucushumushu");
console.log(cucu);

const findMutation = mutations.find(
  (mutation) => mutation.name === "Porompompero"
);
console.log(findMutation);

console.log("Task 6.3part2:");
const fusionAlien = { ...cucu, mutation: findMutation };
console.log(fusionAlien);
//?---------------------------------------------------------------------------------------------------
//**Iteración #7: Reduce**
/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función .reduce().*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 7.1:");

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

const examsSum = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log(examsSum);
//?---------------------------------------------------------------------------------------------------
/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce().*/
//?---------------------------------------------------------------------------------------------------
console.log("Task 7.2:");

// esto no me sale, otro día.

//?---------------------------------------------------------------------------------------------------
//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().
//?---------------------------------------------------------------------------------------------------
console.log("Task 7.3:");

const averageExam =
  exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log(averageExam);
//?---------------------------------------------------------------------------------------------------
/**Iteración #8: Bonus**

6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
array .gender.*/
//?---------------------------------------------------------------------------------------------------
const videogames = [
  { name: "Final Fantasy VII", genders: ["RPG"], score: 9.5 },
  { name: "Assasins Creed Valhala", genders: ["Aventura", "RPG"], score: 4.5 },
  { name: "The last of Us 2", genders: ["Acción", "Aventura"], score: 9.8 },
  { name: "Super Mario Bros", genders: ["Plataforma"], score: 8.5 },
  { name: "Genshin Impact", genders: ["RPG", "Aventura"], score: 7.5 },
  {
    name: "Legend of Zelda: Breath of the wild",
    genders: ["RPG", "La cosa más puto bonita que he visto nunca"],
    score: 10,
  },
];
