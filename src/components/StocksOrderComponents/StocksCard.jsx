import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Logo1 from '../ProductsComponents/image/logo-1.png'
const StocksCard = () => {
  return (
    <Card className='text-center'>
        <Card.Body>
         <div className='mt-5'>
         <img src={Logo1} alt='logo-1' /><br></br>
         <b>Produtcs list is not yet set up</b>
         <p className='text-secondary'>Setup your product list in minutes by <br></br> importing your products fast and easy </p>
         <Button variant="secondary">Import Products</Button>
         </div>
        </Card.Body>
   </Card>
  )
}

export default StocksCard