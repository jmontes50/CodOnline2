import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function NavCliente() {
  return (
    <Fragment>
      <Link className="nav-link text-dark" to='/Login'>
        Login
        </Link>
    </Fragment>
  )
}
