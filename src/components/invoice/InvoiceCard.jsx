import React from 'react'
import Card from 'react-bootstrap/Card';

const InvoiceCard = () => {
  return (
    <Card className='text-center m-3'>
     <Card.Body>
       <h5>No invoice history</h5>
       <p> All invoices for this clint will appear here.Make a sale to create your first invoice</p>
     </Card.Body>
    
    </Card>
  )
}

export default InvoiceCard