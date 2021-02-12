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

  let agregarTarea = () =>{
    //esta funcion se va a encargar de agregar tarea al estado de mi lista
    //...lista <- desestructurando y agrego tarea
    setLista([...lista, tarea])
  }

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
      <button onClick={()=>{agregarTarea()}}>
        Agregar
      </button>
      <hr/>
      {tarea}
      <hr/>
      {lista.map((item)=>{
        return (<p>{item}</p>)
      })}
    </div>
  )
}