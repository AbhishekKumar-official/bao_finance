import React from 'react'
import {Route,Switch} from "react-router-dom"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import "./App.css"
const App = () => {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/menu" component={Menu}/>
      
    </Switch>
    <Footer />
    </div>
  )
}

export default App
