import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
const Products = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='border-1'>
    <Row>
      <Col sm={3}>
        <Nav variant="tabs" className="flex-column border-1 m-2 p-2 ">
          <Nav.Item >
            <Nav.Link eventKey="first" className='text-dark'>Products</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" className='text-dark'>Porducts List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third" className='text-dark'>Inventory</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth" className='text-dark'>Stoktakes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="five" className='text-dark'>Stock Order</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="six" className='text-dark'>Suppliers</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content className='m-4 text-dark'>
          <Tab.Pane eventKey="first">
            <h2> Products test1</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <h2>products test 2</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <h2>Inventory</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <h2>Stoktakes</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="five">
            <h2>Stock Order</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="six">
            <h2>Suppliers</h2>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
    </Tab.Container>
  )
}

export default Products