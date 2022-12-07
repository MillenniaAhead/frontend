import React from 'react'
import Card from 'react-bootstrap/Card';



const PaymentCard = () => {
  return (
    <Card className='text-center m-3'>
        <Card.Body>
        
        <h5>No Payment Method</h5>
        <p> The Client has no payment method </p>
        </Card.Body>
   
   </Card>
  )
}

export default PaymentCard