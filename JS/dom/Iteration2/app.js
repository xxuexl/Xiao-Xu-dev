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
//? *Lo insertamos mediante un template*

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
//? *Lo insertamos mediante un template*

const newDivTemplate = document.createElement("div");

//* Hacemos el bucle para añadir el template al Div */

for (let i = 0; i < 6; i++) {}

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//	Recuerda que no solo puedes insertar elementos con .appendChild.

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
