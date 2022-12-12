
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';






const ProductsModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}  >
        Import products
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
        
         <Button variant="secondary" onClick={handleClose}>
        Next Step
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
                 <span className='text-secondary'> Import products</span>
                 <span> <b><h4> Upload file</h4> </b></span>
                 <span className='mb-4'> Upload a CSV file with your product data, or download and fill the template below <Link> Learn more</Link>  </span>
                   <Card className='w-50  mx-auto'>

                    <p className='text-center mt-5'>For the best quality upload, input your data into the template below,
                    then upload the file to import.</p>
                    <span className='mt-2'><h6>Download template</h6></span>
                   </Card>
               </Row>
            </Container>
      

        </Modal.Body>
      
        </Modal>
    </>
  )
}

export default ProductsModal