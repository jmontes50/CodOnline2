//Hooks
//useState es el que se va a encargar de manejar el estado
//en un componente funcional
import {useState} from 'react'

export default function App(){
  //let [estado, funcionActualizaEstado] = useState(EstadoInicial)
  let [tarea, setTarea] = useState("escribir")
  //puedo tener cuantos estados quiera
  let [lista, setLista] = useState([])
  let titulo = "To-do App"

  //componentes controlados
  //todo input debe estar amarrado a un estado
  return(
    <div>
      <h4>{titulo}</h4>
      <input 
        type="text" 
        placeholder="agregar tarea" 
        value={tarea}
        onChange={(e)=>{setTarea(e.target.value)}}
      />
      <button onClick={()=>{setTarea("Comer")}}>
        Agregar
      </button>
      <hr/>
      {tarea}
    </div>
  )
}