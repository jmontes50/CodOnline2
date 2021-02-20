import React from 'react'

import {Switch, BrowserRouter as Router} from "react-router-dom"
import Routes from "./routes"

export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Routes/>
        </Switch>
      </div>
    </Router>
  )
}
