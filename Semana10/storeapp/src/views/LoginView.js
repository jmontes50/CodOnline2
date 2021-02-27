import React, {useState, useContext} from 'react' //useContext me permite utilizar un contexto dentro de mi componente
import {loginFire} from "../services/authFireService"
import {AuthFireContext} from '../context/authFireContext'//necesitamos saber que context

export default function LoginView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {userId, setAuthUserId} = useContext(AuthFireContext) //de esta manera utilizo el contexto dentro de mi componente
  
  const login = (e) => {
    e.preventDefault()
    loginFire(email, password)
    .then(rpta => {
      console.log(rpta)
      setAuthUserId(rpta.user.uid)
    })
    .catch(error => console.log(error))
  }

  return (
   <div>
      <h1 className="display-4">Loguearse</h1>
      <form onSubmit={(e) => {login(e)}}>
        <div>
          <label className="form-label">Correo</label>
          <input 
            className="form-control" 
            type="email" 
            placeholder="jperez@tecsup.edu.pe"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div>
          <label className="form-label">Contraseña</label>
          <input 
            className="form-control" 
            type="password" 
            placeholder="Ingrese una contraseña segura"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
    </div>
  )
}
