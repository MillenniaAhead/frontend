
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';






const StoktakeProMod= () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}  >
        Add New
      </Button>

        <Modal show={show} onHide={handleClose} className=''   size="xl">
        <Container>
         <Row>
         <Stack direction="horizontal" gap={3} className =''>
         <div className="bg-light border">
         <Modal.Header closeButton className='mt-3 '>
          
         </Modal.Header>

         </div>
         <div className="bg-light border ms-auto border-1">
        
         <Button variant="secondary" onClick={handleClose}>
         Start stocktake
         </Button>  
         </div>
      
         <div className="" />
         
         </Stack>
         </Row>
        </Container>
        <hr
        style={{
          background: 'lime',
          color: 'green',
          borderColor: 'green',
          height: '2px',
        }}
      />
        
         
      
        <Modal.Body>
            <Container>
                <Row>
                   <div className='text-center'>
                   <p className='text-secondary'> Create a new stocktake </p>
                   <h4> Add the stocktake info</h4>
                   <p className='text-secondary'>Start a full inventory count to keep accurate stock levels.<Link> Learn more </Link></p>
                   </div>
                   <Card className='mx-auto w-50 '>
                   <Card.Header>
                  <b>  Stocktake info</b>
                   </Card.Header>
                   <Card.Body>
            
                    <Form.Group className="mb-3">
                            <Form.Label> <b>Stocktake name <span className='text-secondary'> (Optional)</span>  </b></Form.Label>
                            <Form.Control placeholder=""  />
                    </Form.Group>
                    <Form.Group className="mb-3">
                            <Form.Label> <b>Stocktake description  </b></Form.Label>
                            <Form.Control placeholder=""  />
                    </Form.Group>
             
                 </Card.Body>
                 </Card>
                </Row>
            </Container>
      

        </Modal.Body>
      
        </Modal>
    </>
  )
}

export default StoktakeProMod