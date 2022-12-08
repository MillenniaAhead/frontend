import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const SupplierListCard = () => {
  return (
    <Card className='text-center'>
        <Card.Body>
         <div className='mt-5'>
         <h4>No suppliers here yet</h4>
         <p className='text-secondary'>Your suppliers will appear here  </p>
         <Button variant="secondary">Add supplier</Button>
         </div>
        </Card.Body>
   </Card>
  )
}

export default SupplierListCard