import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Plus from './image/plus-circle.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const Inventory = () => {
  return (
    <Card>
    <Card.Header> 
        <p> <b>Inventory </b> </p>
        <p className='text-secondary'>Manage stock levels of this product through Outlet Control.</p>
     </Card.Header>
    
    <Card.Body>
    <Form.Group className="mb-3">
      <Form.Label> <b>SKU </b> <span className='text-secondary'> (Stock Keeping Unit)</span></Form.Label>
      <Form.Control placeholder=""  />
    </Form.Group>

     <p className='text-success'>Generate SKU automatically</p>
     <span className='text-success'><img src={Plus} alt =''/> Add another SKU code </span>
        <hr></hr>
      <span><p><b>Supplier</b></p></span>
      <span className='text-success '>Select a supplier</span>
      <hr></hr>
      <span> <b> Stock quantity</b></span>
      <Form.Group className="mb-4">
        <Form.Label> <b>Current stock quantity </b></Form.Label>
        <Form.Control placeholder="0"  />
      </Form.Group> 
        <span><b>Low stock and reordering </b></span>
        <p>Outlet Control will automatically notify you and pre-fill the recorder quantity set for
        future stock orders.<Link> Learn more </Link></p>
        <Container>
           <Row>
           <Col>
           <Form.Group className="mb-3">
              <Form.Label> <b>Low stock level </b></Form.Label>
              <Form.Control placeholder="0"  />
              <span className='text-secondary'> The level to get notified to reorder</span>
            </Form.Group>
           
           </Col>

           <Col>
           <Form.Group className="mb-3">
              <Form.Label> <b>Reorder quantity </b></Form.Label>
              <Form.Control placeholder="0"  />
              <span className='text-secondary'> The default amount to order</span>
            </Form.Group>
           </Col>
           </Row>
        </Container>

        <FormGroup>
      
      <FormControlLabel disabled control={<Switch />} label="Receive low stock notifications." />
    </FormGroup>
      
    </Card.Body>
    
    </Card>
  )
}

export default Inventory