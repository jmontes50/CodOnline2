import React,{useState,useEffect} from 'react'

export default function App() {
  let [contador, setContador] = useState(0)
  let [texto, setTexto] = useState("")
  //useEffect(aca dentro una funcion), se dispara siempre que se monte el componente o cambie un estado
  //solamente cuando cambie contador o se monte mi componente
  useEffect(()=>{
    console.log(`Ejecutandome! ${contador} ${texto}`)
    //peticiones - fetch, axios
  },[contador])

  //solamente se dispara cuando se monta o cambia texto
  useEffect(()=>{
    console.log(`Mostrando ${texto}`)
  },[texto])

  //solamente se ejecute cuando se monte el componente
  useEffect(()=>{
    console.log("Fase de Montaje")
    //PETICION - API
  },[])

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={()=>{setContador(contador + 1)}}>
        Aumentar
      </button>
      <button onClick={()=>{setContador(contador - 1)}}>
        Reducir
      </button>
      <hr/>
      <input 
       type="text"
        value={texto} 
        onChange={(e)=>{setTexto(e.target.value)}}
      />
    </div>
  )
}
