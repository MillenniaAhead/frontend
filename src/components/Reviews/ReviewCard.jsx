import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const ReviewCard = () => {
  return (
    
    <Container>
        <Row>
            <Stack direction="horizontal" gap={3} className ='m-2'>
                <div className=""> 
                    <h2>Reviews</h2>
                    <p>See star ratings and reviews left by clintes after their visit .<Link> Learn More </Link></p>
                </div>
            </Stack>
            <Card style={{ width: '71rem' }} className='mb-3' >
            
                    <Card.Body>
            
                       <Button variant="outline-secondary">Filters </Button>
                        
                    </Card.Body>
            </Card>
             <Card style={{ width: '71rem', textAlign: 'center'}}>
                  <div className="mt-5 mb-3">
                  <h4> no reviews </h4>
                  <p>Registered Outletcontrols user can rate completed <br></br> appointments,boosting your profile<br></br> encouraging new clints to book</p>
                 
                  </div>
             
             </Card>
        </Row>
    
    </Container>
  )
}

export default ReviewCard