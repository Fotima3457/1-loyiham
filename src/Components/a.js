import React from 'react'
import {Link } from "react-router-dom";
import "../style/Navbar.css"
const a = () => {
  return (
    <div align="center" id="navbardiv">
    <Link to="/form"><button id="nextpage">Next Page</button></Link>
    </div>
  )
}

export default a