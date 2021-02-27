import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import iconito from "../assets/woman.png"; //para utilizar una imagen que este en mi proyecto tengo que importarlo
import {AuthFireContext} from "../context/authFireContext"
import NavAdmin from "./NavAdmin"

export default function TopNav() {
  const [estaColapsado, setEstaColapsado] = useState(true);
  const manejarColapso = () => setEstaColapsado(!estaColapsado);

  const {userId} = useContext(AuthFireContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container">
        <Link className="navbar-brand" to='/'>
          <img src={iconito} alt="logo" height="36" />
          <span className="mx-2">StoreApp</span>
        </Link>

        <button
          className="custom-toggler navbar-toggler"
          data-toggle="collapse"
          data-target="#topnav"
          aria-expanded={!estaColapsado ? true : false}
          onClick={manejarColapso}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* //Agregar aquí Links */}
        <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="topnav">
          <Link className="nav-link text-dark" to='/login' >Login</Link>
          {/* pregunto si estoy logueado y si no pues muestro los links de admin */}
          {userId !== null ? (<NavAdmin/>) : null}
        </div>
      </div>
    </nav>
  );
}
