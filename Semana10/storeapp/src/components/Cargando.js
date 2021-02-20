import React from 'react'

export default function Cargando() {
  return (
    <div
    // con estos estilos hago que este div ocupe todo el ancho y el alto, si o si y que este por encima de todo
      style={{
        position:'fixed',
        top:'0',
        left:'0',
        width:'100vw',
        height:'100vh',
        backgroundColor:'white',
        zIndex:'999'
      }}
    >
      <i 
        className="fas fa-spinner fa-spin fa-6x"
        style={{
          color:'#DD5E89',
          position:'relative',
          top:'calc(50% - 50px)',
          left:'calc(50% - 50px)'
        }}
      >
      </i>
    </div>
  )
}
