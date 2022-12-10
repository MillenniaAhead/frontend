import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Logo from './image/logo-1.png'

const ProductListCard = () => {
  return (
    <Card className='text-center'>
        <Card.Body>
         <div className='mt-5'>
         <img src={Logo} alt='' />
         <h5><b>No products yet</b></h5>
         <p className='text-secondary'>Your products will appear here here.Import <br></br> produtcs in minutes and start selling theme <br></br> online and at your location</p>
         <Button variant="secondary">Import Product</Button>
         </div>
        </Card.Body>
   </Card>
  )
}

export default ProductListCard