
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





const SupplierModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}  >
        Add new 
      </Button>

        <Modal show={show} onHide={handleClose} className=''   size="xl">
        <Container>
         <Row>
         <Stack direction="horizontal" gap={3}>
         <div className="bg-light border">
         <Modal.Header closeButton className='mt-3'>
          
         </Modal.Header>
         </div>
         <div className="bg-light border ms-auto">
        
         <Button variant="secondary" onClick={handleClose}>
         Save 
         </Button>  
         </div>
         <div className="vr" />
         
         </Stack>
         </Row>
        </Container>
        
            
        <Modal.Title className='text-center'>Add a new supplier</Modal.Title>
        <Modal.Body>
            <Container>
              <Row>
                  <Col>
                    <Card>
                      <Card.Header className='fs-6'> <b>Supplier details </b></Card.Header>
                      <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Label> <b>Supplier name </b></Form.Label>
                        <Form.Control placeholder="e.g. L’Oreal" className='text-secondary'  />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label> <b>Product description </b></Form.Label>
                        <Form.Control placeholder="e.g. Local provider of hair products" className='text-secondary' />
                      </Form.Group>
                      </Card.Body>
                    </Card>
                  
                  </Col>
              </Row>
          </Container>
        </Modal.Body>
        <Modal.Body>
            <Container>
              <Row>
                  <Col>
                    <Card>
                      <Card.Header className='fs-6'> <b>Contact info </b></Card.Header>
                        <Card.Body>
                        
                        <Form.Group className="mb-3">
                          <Form.Label> <b>First name </b></Form.Label>
                          <Form.Control placeholder="e.g. L’Oreal" className='text-secondary'  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label> <b>Last name </b></Form.Label>
                          <Form.Control placeholder="e.g. L’Oreal" className='text-secondary'  />
                        </Form.Group>

                        <Form.Label htmlFor="basic-url" ><b>Phone number</b> </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">
                          +91
                          </InputGroup.Text>
                          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>

                        <Form.Label htmlFor="basic-url" ><b>Telephone</b> </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon3">
                          +91
                          </InputGroup.Text>
                          <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>

                        <Form.Group className="mb-3">
                          <Form.Label> <b>email </b></Form.Label>
                          <Form.Control placeholder="mail@example.com" className='text-secondary'  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label> <b>website</b></Form.Label>
                          <Form.Control placeholder="www.google.com" className='text-secondary'  />
                        </Form.Group>
                        </Card.Body>
                    </Card>
                  
                  </Col>
              </Row>
          </Container>
        </Modal.Body>
        <Modal.Body>
            <Container>
              <Row>
                  <Col>
                    <Card>
                      <Card.Header className='fs-6'> <b>Physical address</b></Card.Header>
                        <Card.Body>
                        
                        <Form.Group className="mb-3">
                          <Form.Label> <b>Street </b></Form.Label>
                          <Form.Control placeholder="e.g. 12 Main Street" className='text-secondary'  />
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label> <b>Suburb </b></Form.Label>
                          <Form.Control placeholder="" className='text-secondary'  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label> <b>City </b></Form.Label>
                          <Form.Control placeholder="" className='text-secondary'  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label> <b>State </b></Form.Label>
                          <Form.Control placeholder="" className='text-secondary'  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label> <b>Zip / Postal Code</b></Form.Label>
                          <Form.Control placeholder="" className='text-secondary'  />
                        </Form.Group>
                       
                         

                        <span>  Same as postal Address</span>
                     </Card.Body>
                    </Card>
                  
                  </Col>
              </Row>
          </Container>
        </Modal.Body>
      
        </Modal>
    </>
  )
}

export default SupplierModal