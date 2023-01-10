import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Img from "../img/bosh icon.png";
import "../img/goog.jpg"
import "../style/Navbar.css"


function expand() {
  return (
    <div>
    <div className='div' >
      <Navbar id='bir' key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#"><img className='Img' src={Img} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
              
                <Nav.Link href="/form" id='soz'>Home</Nav.Link>
                <Nav.Link href="/home" id='soz'>Menu</Nav.Link>
                <Nav.Link href="/contact" id='soz2'>Placing an order</Nav.Link>
              </Nav>
             
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
     
    </div>
    </div>
  )
}

export default expand;