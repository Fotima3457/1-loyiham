import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fanta from "../img/fanta.jpg"
import coctel from "../img/coctel.jpg"
import sut from "../img/sut.avif"
import mineral from "../img/mineral.jpg"
import coffee from "../img/coffee.jpg"
import pepsi from "../img/pepsi.jpg"
import "../style/Navbar.css"
import { Link } from 'react-router-dom';
const suv = () => {
  return (
    <div align="center" className='div2'>
      <ul className='suvul'>
        <li>
          <Card style={{ width: '18rem',   }}>
            <Card.Img className='Cardimg' variant="top" src={fanta} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Fanta <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card style={{ width: '18rem',  }}>
            <Card.Img className='Cardimg' variant="top" src={mineral} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Mineral <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card style={{ width: '18rem',  }}>
            <Card.Img className='Cardimg' variant="top" src={coctel} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Coctel <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li> 
        <li>
          <Card style={{ width: '18rem', marginTop:"3%" ,}}>
            <Card.Img className='Cardimg' variant="top" src={coffee} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Coffe <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card style={{ width: '18rem', marginTop:"3%"  }}>
            <Card.Img className='Cardimg' variant="top" src={sut} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Milk <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li>
        <li>
          <Card style={{ width: '18rem',marginTop:"3%" }}>
            <Card.Img className='Cardimg' variant="top" src={pepsi} />
            <Card.Body>
              <Card.Title>Water</Card.Title>
              <Card.Text>
                Nomi:Pepsi <br />
                Narxi:9.000 <br />
              </Card.Text>
              <Link to="/contact"><Button variant="primary">Buyurtma berish</Button></Link>
            </Card.Body>
          </Card>
        </li>
      </ul>
    </div>

  );
}

export default suv










