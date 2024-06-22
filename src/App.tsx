import './App.css'
import React from 'react'
import { Route, Switch } from 'wouter'
import FormularioVista from './vistas/FormularioVista'
import Todo from './vistas/Todo'
import Home from './vistas/Home'


function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/formulario" component={FormularioVista} />
        <Route path="/todo" component={Todo} />
        {/* Default route in a switch */}
        <Route>404: No existe esa pagina!</Route>
      </Switch>
    </>
  )
}

export default App
