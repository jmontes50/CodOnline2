import React from "react";

import { Switch, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
//importando ContextProvider
import AuthContextProvider from "./context/authFireContext";

export default function App() {
  return (
    <Router>
      <AuthContextProvider>
        <div className="container">
          <Switch>
            <Routes />
          </Switch>
        </div>
      </AuthContextProvider>
    </Router>
  );
}
