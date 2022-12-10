import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
const Pricing = () => {
  return (
    <Card className='mb-3'>
      <Card.Header> Pricing</Card.Header>
      <Card.Body>
        <p> <b> Supply price</b> </p>
         <Card.Header>
         <InputGroup>
         <InputGroup.Text><p className='text-secondary'>INR</p></InputGroup.Text>
         <Form.Control as="textarea" aria-label="With textarea" />
         </InputGroup>
         </Card.Header>
         <p className='mt-2'><b> Retail sales</b></p>
         <p className='text-secondary'>Allow sales of this product at checkout.</p>
         <FormGroup>
            <FormControlLabel control={<Switch defaultChecked  color='success'/>} label="Enable retail sales" defaultChecked color="" />
         
         </FormGroup>
         <Container>
           <Row>
           <Col>
           <Form.Label> <b>Retail price </b></Form.Label>
           <InputGroup>

              <InputGroup.Text><p className=''><bd> INR</bd></p></InputGroup.Text>
           
            <Form.Control as="textarea" aria-label="With text"  placeholder="0.00" />
          </InputGroup>
           </Col>
           <Col>
           <Form.Label> <b>Special price </b></Form.Label>
           <InputGroup>

              <InputGroup.Text><p className=''><bd> INR</bd></p></InputGroup.Text>
           
            <Form.Control as="textarea" aria-label="With textarea"   placeholder="0.00" />
          </InputGroup>
           </Col>
           <Col><Form.Label> <b>Markup </b></Form.Label>
           <InputGroup>

              <InputGroup.Text><p className=''><bd> INR</bd></p></InputGroup.Text>
           
            <Form.Control as="textarea" aria-label="With textarea"   placeholder="0.00"/>
          </InputGroup></Col>
           </Row>
         </Container>

         <Form.Group className="mb-3">
                <Form.Label> <b>Tax </b></Form.Label>
                <Form.Control placeholder="Default no tax"  />
        </Form.Group>
       <Card.Footer>
        <p> <b>Team member commission</b></p>
        <p className='text-secondary'> Calculate team member commission when the product is sold.</p>
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked  color='success'/>} label="Enable team member commission" />
         
         </FormGroup>
       </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default Pricing