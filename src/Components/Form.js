import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom"
import "../style/Navbar.css"

const Salom = () => {
  return (
    <div>
    <Form className='orm'>
    <Form.Group id='nam' className="mb-3" controlId="formBasicEmail">
      <Form.Label style={{color:"black"}} >Name:</Form.Label>
      <Form.Control style={{color:"black"}} type="text" placeholder="Name..." />
    </Form.Group>
    <Form.Group id='phone' className="mb-3" controlId="formBasicPassword">
      <Form.Label style={{color:"black"}} >Phone number:</Form.Label>
      <Form.Control type="phone" placeholder="Phone number..." />
    </Form.Group>
   <Link  to="/home">  <Button id='btn'  variant="primary" type="submit">  Next </Button></Link>
  </Form> 
    </div>
    
  )
}

export default Salom