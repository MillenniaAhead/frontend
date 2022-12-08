import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductListCard = () => {
  return (
    <Card className='text-center'>
        <Card.Body>
         <div className='mt-5'>
         <h4>No products yet</h4>
         <p className='text-secondary'>Your products will appear here here.Import <br></br> produtcs in minutes and start selling theme <br></br> online and at your location</p>
         <Button variant="secondary">Import Product</Button>
         </div>
        </Card.Body>
   </Card>
  )
}

export default ProductListCard