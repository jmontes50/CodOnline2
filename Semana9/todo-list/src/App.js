import React,{useState} from 'react'
import ListaComponent from "./components/ListaComponent"

export default function App() {
  let [lista, setLista] = useState(["Estudiar","Ordenar"])

  let actualizarLista = (arrTareas) => {
    setLista(arrTareas)
  }

  return (
    <div>
      <h1>Tienes {lista.length} tareas</h1>
      <br/>
      {/* Levantamiento de estado - lifting state */}
      <ListaComponent listaTareas={lista}/>
    </div>
  )
}
