import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foods from "../img/fre.jpg"
import food2 from "../img/chicken leg.jpg"
import food3 from "../img/lav.jpg"
import food4 from "../img/pizza.jpg"
import food5 from "../img/sushi.jpg"
import food6 from "../img/hot.jpg"
import "../style/Navbar.css"

const food = () => {
  return (
    <div align="center" className='div2'>
    <ul className='suvul'>
      <li>
        <Card style={{ width: '18rem',  }}>
          <Card.Img className='Cardimg' variant="top" src={foods} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Free <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', }}>
          <Card.Img className='Cardimg' variant="top" src={food2} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Chicken legs <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', }}>
          <Card.Img className='Cardimg' variant="top" src={food3} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Lavash <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li> 
      <li>
        <Card style={{ width: '18rem',marginTop:"3%",  }}>
          <Card.Img className='Cardimg' variant="top" src={food4} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Pizza <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', marginTop:"3%" }}>
          <Card.Img className='Cardimg' variant="top" src={food5} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Sushi <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem', marginTop:"3%"  }}>
          <Card.Img className='Cardimg' variant="top" src={food6} />
          <Card.Body>
            <Card.Title>Fast-Food</Card.Title>
            <Card.Text>
              Nomi:Hot-Dog <br />
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

export default food