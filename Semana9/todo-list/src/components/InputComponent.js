import React, {useState} from 'react'

export default function InputComponent({listaTareas, actualizarLista}) {

  //const [state, setState] = useState(estado inicial)
  const [tareaNueva, setTareaNueva] = useState("")

  return (
    <div>
      <input 
        type="text"
        placeholder="Agregar Tarea"
        value={tareaNueva}
        onChange={(e)=>{setTareaNueva(e.target.value)}}
      />
      <button onClick={() => {actualizarLista([...listaTareas, tareaNueva])}}>
        Agregar
      </button>
    </div>
  )
}
