import { useState } from "react";

const Night = () => {
  
    const [text, setText] = useState(true) /**
     * const para que tiene text y setText donde el set cambia el estado de la variable text
     */
    
    const Cambio = () => {
      setText(!text) /**hace que cambia el texto, en este caso de true a false y vice versa */
    }
  return (
    <div>
      <h1>{text? 'True': 'False'}</h1> 
    <button onClick={(Cambio)}>Click</button>
    </div>
  ) //Se crea dicho botón para cambiar de true a false 
}
export default Night