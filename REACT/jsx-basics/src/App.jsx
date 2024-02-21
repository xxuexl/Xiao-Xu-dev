import './App.css'
import Night from './components/Night'

const App = () => {
  
    const night = ["earplugs", "water", "book"] 

    const nightArray = () => {
        return night.map((value, index) =><p key={index}>Fantastic {value}</p>);
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

/* Los componentes ( en este caso Night) para ser llamados tienen esta sintaxis. */
/*<>  </> --> Called Fragments */