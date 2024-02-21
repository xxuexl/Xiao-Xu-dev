import { useState } from "react";

const Night = () => {
  
    const [button, setButton] = useState(true) 
     /* set modifica el estado de la variable button */
    
    const Change = () => {
      setButton(!button) /* Cambiará de True a False y viceversa */
    }
  return (
    <div>
      <h1>{button? 'True': 'False'}</h1> 
    <button onClick={(Change)}>Click</button>
    </div>
  ) //Se crea dicho botón para cambiar de true a false 
}
export default Night