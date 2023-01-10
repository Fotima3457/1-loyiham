import React from 'react'
import Img2 from "../img/bulut.png"
import Img1 from "../img/menu.png"
import "../style/Navbar.css"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='bac'>
      <img className='img1' src={Img1} />
      <img className='img2' src={Img2} />
      <img className='img3' src={Img2} />
      <img className='img4' src={Img2} />
      <img className='img5' src={Img2} />
      <h1 align='center' className='img11'>Menu</h1>
      <div className="div1">
        <h1 >   <Link id='f' to="suv">  Drink</Link></h1>
        <h1 >  <Link id='b' to="food">  Fast Food</Link></h1> <br /><br /> <br /><br /><br /> <br />
        <h1 >  <Link id='d' to="shirin">Sweets</Link></h1> <br /><br /><br />
        <div> 
          <h1 >  <Link id='a' to="salat"> Salad</Link></h1>
        </div>
      </div>
    </div>

  )
}
export default Home