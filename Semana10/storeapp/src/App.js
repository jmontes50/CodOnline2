import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
//importando ContextProvider
import AuthContextProvider from "./context/authFireContext";
import CarritoContextProvider from "./context/carritoContext";
import TopNav from "./components/TopNav";

import "./App.css"

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <CarritoContextProvider>
          <TopNav />
          <div className="container">
            <Switch>
              <Routes />
            </Switch>
          </div>
        </CarritoContextProvider>
      </AuthContextProvider>
    </Router>
  );
}
