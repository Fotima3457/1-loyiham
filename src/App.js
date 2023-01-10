import React from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import Navbar from "./Components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home"
import A from "./Components/a.js"
import "./img/goog.jpg"
import "./style/Navbar.css"
import Contact from "./Components/Contact"
import About from "./Components/About"
import Food from "./menu/food";
import Salat from "./menu/salat";
import Suv from "./menu/suv";
import Shirin from "./menu/shirin";
import Salom from "./Components/Form"
function App() {
  return (
    <BrowserRouter>
      <switch>
        <Navbar />
        <Route exact path="/"  component={A}/>
        <Route exact path="/form" component={Salom} />
        <Route path="/home" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/shirin" component={Shirin} />
        <Route path="/salat" component={Salat} />
        <Route path="/suv" component={Suv} />
        <Route path="/food" component={Food} />
      </switch>
    </BrowserRouter>
  );
}
export default App;
