import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProductFloating from './ProductFloating';
const BasicInfo = () => {
  return (
     <Card className='mb-3 '>
       <Card.Header>
      <b>  Basic Info</b>
       </Card.Header>
       <Card.Body>

        <Form.Group className="mb-3">
                <Form.Label> <b>Product Name </b></Form.Label>
                <Form.Control placeholder=""  />
        </Form.Group>

        <Form.Group className="mb-3">
                <Form.Label> <div>Product Name <span className='text-secondary'>(optional)</span> </div></Form.Label>
                <Form.Control placeholder="UPC,EAN,GTIN"  />
        </Form.Group>

            <p><b> Product Brand </b></p>
            <p className='text-success'>Select a brand</p> 
            
             <ProductFloating />

             <Form.Group className="mb-3">
                <Form.Label> <b>Product Discription </b></Form.Label>
                <Form.Control placeholder=""  />
             </Form.Group>
       
     </Card.Body>
     </Card>
  )
}

export default BasicInfo