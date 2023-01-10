import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import "../style/contact.css"
import  "../style/Navbar.css"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Contact() {
  const [raz, setRaz] = useState("");
  const [bir, setBir] = useState("");
  const [ikki, setIkki] = useState("");
  const [uch, setUch] = useState("");
  const [raz1, setRaz1] = useState("");
  const [bir2, setBir2] = useState("");
  const [ikki3, setIkki3] = useState("");
  const [uch4, setUch4] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div align="center">
      <Button id='butm' onClick={handleOpen}>Meni bosing...</Button>
      <p className='p3'>Fast-Food:<span>{raz}{raz1}</span> </p>
      <p className='p3'> Sweets:<span>{bir}{bir2}</span> </p>
      <p className='p3' > Drink:<span>{ikki}{ikki3}</span> </p>
      <p className='p3'> Salad:<span>{uch}{uch4}</span> </p>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} style={{ height: "600px", width: "500px" }}>
          <div align="center">
            <p style={{ fontSize: "25px", color: "black", fontfamily: "arail black" }}>Buyurtma nomlarini kiriting</p>
            <label htmlFor="">Fast-Food</label> <br />
            <input className='inp1' type="text" name="" id="" onChange={e => setRaz(e.target.value)} placeholder='Fast-Food' /> <label htmlFor="">Soni</label> <input className='nechta' type="number" name="" onChange={e => setRaz1(e.target.value)} id="" />   <br />
            <label htmlFor="">Sweets</label> <br />
            <input className='inp1' type="text" name="" id="" onChange={e => setBir(e.target.value)} placeholder='Sweets' /><label htmlFor="">Soni</label> <input className='nechta' type="number" name="" onChange={e => setBir2(e.target.value)} id="" />  <br />
            <label htmlFor="">Drink</label> <br />
            <input className='inp1' type="text" name="" id="" onChange={e => setIkki(e.target.value)} placeholder='Drink' /> <label htmlFor="">Soni</label> <input className='nechta' type="number" name="" onChange={e => setIkki3(e.target.value)} id="" /> <br />
            <label htmlFor="">Salat</label> <br />
            <input className='inp1' type="text" name="" id="" onChange={e => setUch(e.target.value)} placeholder='Salat' /><label htmlFor="">Soni</label> <input className='nechta' type="number" name="" onChange={e => setUch4(e.target.value)} id="" />   <br />
         
            <button onClick={handleClose}>Buyurtma berish</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}