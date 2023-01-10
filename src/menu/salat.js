import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  salats from "../img/salat.png"
import  salat1 from "../img/salat2.jpg"
import  salat2 from "../img/salat33.jpg"
import  salat3 from "../img/salat4.jpg"
import  salat4 from "../img/salat5.jpg"
import  salat5 from "../img/salat6.jpg"
import "../style/Navbar.css"

const salat = () => {
  return (
    <div align="center" className='div2'>
    <ul className='suvul'>
      <li>
        <Card style={{ width: '18rem',   }}>
          <Card.Img className='Cardimg' variant="top" src={salats} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', }}>
          <Card.Img className='Cardimg' variant="top" src={salat1} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', }}>
          <Card.Img className='Cardimg' variant="top" src={salat2} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li> 
      <li>
        <Card style={{ width: '18rem', marginTop:"3%", }}>
          <Card.Img className='Cardimg' variant="top" src={salat3} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', marginTop:"3%" }}>
          <Card.Img className='Cardimg' variant="top" src={salat4} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem',marginTop:"3%"  }}>
          <Card.Img className='Cardimg' variant="top" src={salat5} />
          <Card.Body>
            <Card.Title>Salad</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
    </ul>
  </div>
  )
}

export default salat