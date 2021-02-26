import React, {useState} from 'react'
import {registroFire} from '../services/authFireService'

export default function RegisterView() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const registrar = (e) => {
    e.preventDefault()
    registroFire(email, password)
    .then(rpta => console.log(rpta))
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h1 className="display-4">Crear Nuevo Usuario</h1>
      <form onSubmit={(e) => {registrar(e)}}>
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
          Crear Nuevo Usuario
        </button>
      </form>
    </div>
  )
}
