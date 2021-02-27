import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconito from "../assets/woman.png"; //para utilizar una imagen que este en mi proyecto tengo que importarlo

export default function TopNav() {
  const [estaColapsado, setEstaColapsado] = useState(true);
  const manejarColapso = () => setEstaColapsado(!estaColapsado);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container">
        <Link className="navbar-brand">
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

        <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="topnav">
          <Link className="nav-link text-dark" to='/login' >Login</Link>
        </div>
      </div>
    </nav>
  );
}
