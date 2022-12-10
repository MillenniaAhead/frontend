
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BasicInfo from './BasicInfo';
import Pricing from './Pricing';
import Inventory from './Inventory';
import ProdutcsPhoto from './ProdutcsPhoto';


const ProductsModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}  >
        Add new Product
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
        
            
        <Modal.Title className='text-center'> Add a new product</Modal.Title>
        <Modal.Body>
           
            
    
        <Container>
            <Row>
            <Col xs={12} md={8}>
             <BasicInfo />
             <Pricing />
             <Inventory />
            </Col>

            <Col xs={6} md={4}>
                <ProdutcsPhoto />
            </Col>
            </Row>
        </Container>


        </Modal.Body>
      
        </Modal>
    </>
  )
}

export default ProductsModal