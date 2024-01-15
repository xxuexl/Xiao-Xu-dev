//Iteración #6: Bucles

//?---------------------------------------------------------------------------------------------
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
//?---------------------------------------------------------------------------------------------
console.log("Task 1.1:");
for (let loop = 0; loop <= 9; loop++) {
  console.log(loop);
}

//?---------------------------------------------------------------------------------------------
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
//?---------------------------------------------------------------------------------------------
console.log("Task 1.2:");
for (let i = 0; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//?---------------------------------------------------------------------------------------------
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.

console.log("Task 1.3:");
for (let i = 1; i <= 10; i++) {
  if (i === 10) {
    console.log(`Dormido! ${i}`);
  } else {
    console.log(`Intentando dormir 🐑 ${i}`);
  }
}
