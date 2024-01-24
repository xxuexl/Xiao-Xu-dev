//2.1 Inserta dinamicamente en un html un div vacio con javascript.

//*Creamos el Div */
const newDiv = document.createElement("div");

//* Lo insertamos en el index HTML */
document.body.appendChild(newDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

//* Creamos los elementos */

const secondDiv = document.createElement("div");
const newP = document.createElement("p");

/*Añadimos texto al P*/
newP.textContent = "Este es un párrafo dentro del div";

/*Añadimos el p al Div y Div al body */
secondDiv.appendChild(newP);

document.body.appendChild(secondDiv);

//!-----------------------------------------------------------------
//*Lo insertamos mediante un template*

const template = () => (
  <div>
    <p>Este es un segundo párrafo dentro del div</p>
  </div>
);
document.body.innerHTML += template();

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

//* Creamos div */
const divSix = document.createElement("div");

//* Bucle FOR para crear los elementos P */
for (let i = 0; i < 6; i++) {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = `Este es el párrafo ${i + 1}`;

  divSix.appendChild(nuevoParrafo);
}

//* Agregar el nuevo Div al documento */

document.body.appendChild(divSix);

//!-----------------------------------------------------------------
//*Lo insertamos mediante un template*

const newDivTemplate = document.createElement("div");

//* Hacemos el bucle para añadir el template al Div */

for (let i = 0; i < 6; i++) {}
// falta cosas

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//* Creamos elemento */
const newPDinamic = document.createElement("p");

//* Le añadimos texto al párrafo */
newPDinamic.textContent = "Soy dinámico";

//*Lo insertamos en el body */
document.body.appendChild(newPDinamic);

//!-----------------------------------------------------------------
//*Mediante un template*

document.body.innerHTML += `<p>Soy dinámico en un template</p>`;

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2InsertHere = document.querySelector("h2.fn-insert-here");
console.log(h2InsertHere);

h2InsertHere.textContent = "Wubba Lubba dub dub"; // 1º Forma
document.querySelector("h2.fn-insert-here").innerHTML = "Wubba Lubba dub dub"; //2º Forma

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//* Creamos lista con ----> UL <---- */
const ulList = document.createElement("ul");

//* Iteramos el array y por cada elemento creamos un li con el texto del elemento
// y luego añadirla al UL */
/*apps.forEach((app) => {
    const elementLi = document.createElement("li")
    elementLi.textContent = app
    //Los añadimos al ulList
     ulList.appendChild(elementLi)
}) */

apps.forEach((app) => {
  const template = () => `<li>${app}</li>`;
  //añadimos este template al ulList
  ulList.innerHTML += template();
});

//Añadimos la UL list al body */
document.body.appendChild(ulList);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//* Seleccionamos estos elementos */
const allRemoveMe = document.querySelectorAll(".fn-remove-me");
//allRemoveMe.remove(); //!------ >No puede borrar lista de nodos

//* Recorremos la lista y los eliminamos uno a uno */
allRemoveMe.forEach((element) => {
  element.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

//*Creamos el elemento y le añadimos el texto */
const pVoyEnMedio = document.createElement("p");
pVoyEnMedio.textContent = "Voy en medio";

//* Seleccionamos los dos Div con la clase .fn-insert-here */
const allDivInsertHere = document.querySelectorAll("div.fn-insert-here");

//* Insertamos mediante insertbefore ---> 1ª Parámetro = Elemento a insertar; 2 parámetro -->
//Elemento donde se insertará antes

document.body;

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDivs = document.querySelectorAll("div.fn-insert-here");
