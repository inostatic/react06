import React from 'react'
import './scss/index.scss'
import {Switch, Route} from 'react-router-dom'
import {HomePage} from "./pages/HomePage"
import {TaskPage} from "./pages/TaskPage"


function App() {
  return (
      <div className="app">
        <Switch>
            <Route component={HomePage} path="/" exact />
            <Route component={TaskPage} path="/edit/:id" exact />
        </Switch>
      </div>
  )
}

export default App;
