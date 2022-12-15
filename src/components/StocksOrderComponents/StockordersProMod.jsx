
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';






const StockordersProMod = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}  >
      Create new order
      </Button>

        <Modal show={show} onHide={handleClose} className='text-center'   size="xl">
        <Container>
         <Row>
         <Stack direction="horizontal" gap={3} className =''>
         <div className="bg-light border">
         <Modal.Header closeButton className='mt-3 '>
          
         </Modal.Header>

         </div>
         <div className="bg-light border ms-auto border-1">
        
         
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
                 <span className='text-secondary'> Create stock order</span>
                 <span> <b><h4> Select a supplier</h4> </b></span>
                 <span className='text-secondary mb-5'> Choose which supplier to order products from. To manage suppliers, click here</span>
               
                   <Card className='w-50  mx-auto'>

                    <p className='text-center mt-5'>Didn’t find anything</p>
                    <span className=' mb-5'>Try searching for another product</span>
                   </Card>
               </Row>
            </Container>
      

        </Modal.Body>
      
        </Modal>
    </>
  )
}

export default StockordersProMod