import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';
import InvoiceCard from '@/components/invoice/InvoiceCard';
import PaymentCard from '@/components/PaymentMethod/PaymentCard';




const Clints = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={2}>
       <div className='m-5'>
           
            <div>
            0
            <p className='text-secondary'>Total sales (INR)</p>
            </div>
            <div>
             1
             <p className='text-secondary'>Total views</p>
             </div>
             <div>
               0
              <p className='text-secondary'>Total views (INR)</p>
             </div>
             <div>
                0
                <p className='text-secondary'>Completed</p>
             </div>
          <div>
            0
          <p className='text-secondary'>Completed</p>
          </div>
          <div>
            0
          <p className='text-secondary'>Review(0)</p>
          </div>
       </div>
        
      </Col>
      <Col sm={3}>
      
      <Card className='m-2 '>
      
        <p className='text-center mt-2 '>Actions</p>
     
     </Card>
       <hr></hr>
        <Nav className="flex-column">
         
          <Nav.Item>
            <Nav.Link eventKey="first">Client Feed</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">Client details</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">Appointments</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth">Deposite</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="five">Payment method</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="six">Membership</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="seven">Form</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="eight">Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nine">Invoice</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="ten">Reviews</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="eleven">Files</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={7}>
        <Tab.Content>
          <Tab.Pane eventKey="first">
          <h2 >Client Feed</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <h2>Client details</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <h2>Appointments</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <h2>Deposite</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="five">
            <h2>Payment method</h2>
            <PaymentCard />
           
          </Tab.Pane>
          <Tab.Pane eventKey="six">
            <h2>Membership</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="seven">
            <h2>Form</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="eight">
            <h2>Products</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="nine">
            <h2>Invoice</h2>
            <InvoiceCard />
          </Tab.Pane>
          <Tab.Pane eventKey="ten">
            <h2>Reviews</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="eleven">
            <h2>File</h2>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  )
}

export default Clints