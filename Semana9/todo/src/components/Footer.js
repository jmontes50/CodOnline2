import {useState} from "react"

export default function Footer ({miMensaje, miNumero, miFuncion}) {
  return(
    <div>
      <hr/>
      <h4>Footer</h4>
      <h5>{miMensaje}</h5>
      <p>{miNumero}</p>
      <button onClick={()=>{miFuncion()}}>
        Mostrar Info
      </button>
    </div>
  )
}