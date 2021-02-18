import React, {useState} from 'react'

export default function InputComponent({listaTareas, actualizarLista}) {

  //const [state, setState] = useState(estado inicial)
  const [tareaNueva, setTareaNueva] = useState("")
  const [estadoSelect, setEstadoSelect] = useState("")

  const agregarTarea = () => {
    actualizarLista([...listaTareas, tareaNueva])
    setTareaNueva("")
  }

  const agregarTareaEnter = (e) => {
    if(e.key === "Enter"){
      agregarTarea()
    }else{
      return
    }
  }

  return (
    <div>
      <input 
        type="text"
        placeholder="Agregar Tarea"
        value={tareaNueva}
        onChange={(e)=>{setTareaNueva(e.target.value)}}
        onKeyUp={(e)=>{agregarTareaEnter(e)}}
      />
      <button onClick={() => {agregarTarea()}}>
        Agregar
      </button>

      <select value={estadoSelect} onChange={(e)=>{setEstadoSelect(e.target.value)}}>
        <option value="Lima">Lima</option>
        <option value="Arequipa">Arequipa</option>
      </select>
    </div>
  )
}
