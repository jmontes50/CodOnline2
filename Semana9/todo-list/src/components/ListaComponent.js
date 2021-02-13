import React from 'react'

//recibo props, lista de tareas
export default function ListaComponent({listaTareas}) {
  return (
    <div>
      <ul>
        {listaTareas.map((tarea) => (
          <li>{tarea}</li>
        ))}
      </ul>
    </div>
  )
}
