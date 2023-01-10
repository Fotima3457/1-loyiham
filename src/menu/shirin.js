import React from 'react'
import  shir from "../img/shir.jpg"
import  shir1 from "../img/shir1.jpg"
import  shir2 from "../img/shir2.jpg"
import  shir3 from "../img/shir3.jpg"
import  shir4 from "../img/shir4.jpg"
import  shir5 from "../img/shir5.jpg"
import "../style/Navbar.css"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const shirin = () => {
  return (
    <div align="center" className='div2'>
    <ul className='suvul'>
      <li>
        <Card style={{ width: '18rem',  }}>
          <Card.Img className='Cardimg' variant="top" src={shir} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem',  }}>
          <Card.Img className='Cardimg' variant="top" src={shir1} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem',  }}>
          <Card.Img className='Cardimg' variant="top" src={shir2} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
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
          <Card.Img className='Cardimg' variant="top" src={shir3} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem',marginTop:"3%"   }}>
          <Card.Img className='Cardimg' variant="top" src={shir4} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
            <Card.Text>
              Nomi:... <br />
              Narxi:9.000 <br />
            </Card.Text>
            <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
          </Card.Body>
        </Card>
      </li>
      <li>
        <Card style={{ width: '18rem',marginTop:"3%"   }}>
          <Card.Img className='Cardimg' variant="top" src={shir5} />
          <Card.Body>
            <Card.Title>Sweets</Card.Title>
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

export default shirin