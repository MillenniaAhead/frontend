import React from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

const ProductFloating = () => {
  return (
    <Row className="g-2 mb-2">
      
      <Col md>
        <FloatingLabel
          controlId="floatingSelectGrid"
        
        >
          <Form.Select aria-label="Milliliters">
            <option>Milliliters</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col md>
      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">ml</InputGroup.Text>
      <Form.Control
        placeholder="0.00"
        aria-label="ml"
        aria-describedby="basic-addon1"
      />
    </InputGroup>
      </Col>
    </Row>
  )
}

export default ProductFloating
