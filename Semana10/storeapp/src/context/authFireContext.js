import {useState, createContext} from 'react'

export const AuthFireContext = createContext() //creo un contexto con este nombre

const AuthContextProvider = (props) => {
  const [userId, setUserId] = useState(null) //estado global

  const setAuthUserId = (id) => { //funcion que se encarga de actualizar el estado global
    setUserId(id) //actualizo el estado global

  }

  return(
                                    //estado, funcion que lo actualiza
    <AuthFireContext.Provider value={{userId, setAuthUserId}}>
      {props.children} 
      {/* props.children es para que este provider pase los props a sus componentes hijos */}
    </AuthFireContext.Provider>
  )
}

export default AuthContextProvider