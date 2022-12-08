import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const StocksCard = () => {
  return (
    <Card className='text-center'>
        <Card.Body>
         <div className='mt-5'>
         <h4>Produtcs list is not yet set up</h4>
         <p className='text-secondary'>Setup your product list in minutes by <br></br> importing your products fast and easy </p>
         <Button variant="secondary">Import Products</Button>
         </div>
        </Card.Body>
   </Card>
  )
}

export default StocksCard