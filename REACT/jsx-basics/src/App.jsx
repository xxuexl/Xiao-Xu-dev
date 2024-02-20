//import { useState } from 'react'
import './App.css'
import './components/Night'
import Night from './components/Night'

/* 2.Renderiza “Buenos días” [6-12] , “Buenas tardes” [13-19] o “Buenas noches”
[20-5] según el valor numérico asignado. */
/* 3.Recorrer los elementos de un array y renderizalos ⇒ Si os da un error de 
keys en la consola podéis usar el index como key={index} 

3. Recorrer los elementos de un array y renderizalos ⇒ Si os da un error 
de keys en la consola podéis usar el index como `key={index}` . XX

4. Mappea un array de objetos para pintarlos.

5. Crea un botón que modifique un valor de false a true y 
renderice un contenido cuando este valor se modifique. */

const App = () => {
  
const  night = [
    "earplugs", "water", "book"
] 

const nightArray = () => {
    return night.map((night, index) =><p key={index}>Fantastic {night}</p>);
}


const time = (hour) => {
    if (hour > 6 && hour < 12) { 
        return <h1>Buenos días</h1>
    }
    else if (hour > 13 && hour < 19) {
        return <h1>Buenas tardes</h1>
    } 
    else {
        return <h1>Buenas noches</h1>
    }
} 
return (
    <> 
    <h1>{time(4)}</h1> 
    {nightArray()} 
    <Night/>  
    </>
)
}
export default App

/* Los componentes (Night) para ser llamados tienen esta sintaxis. */
