import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';



const ClintsCard = () => {
  return (
    <Container className='mb-5'>
        <Row>
        <Stack direction="horizontal" gap={3} className ='m-2'>
        <div className=""> 
        <h2>Clints List</h2>
        <p>View,add,edit and delet your clinent's details. <Link> Learn More </Link></p>
        </div>
        <div className=" ms-auto">
        <DropdownButton id="dropdown-item-button" title="Option" variant="outline-secondary" >
        <Dropdown.ItemText  >Option</Dropdown.ItemText>
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
        </div>
        <div className=""> <Button variant="secondary">Add Clint</Button></div>
         </Stack>
    
            <Card style={{ width: '71rem' }} >
            
                <Card.Body>
                    <Card.Title> <b> Set up your Outlet Control profile for clints to book online </b> </Card.Title>
                        <Card.Text>
                        <p> Free up time and get your clints self booking online 24/7</p>
                        </Card.Text>
                    <Button variant="outline-secondary">Start now</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default ClintsCard