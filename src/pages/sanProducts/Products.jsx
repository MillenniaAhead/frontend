import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ProductsCard from '@/components/ProductsComponents/ProductsCard';
import ProductListCard from '@/components/ProductsComponents/ProductListCard';
import StockstakesCard from '@/components/StokesTakeComponents/StockstakesCard';
import StokesCards from '@/components/StokesTakeComponents/StokesCards';
const Products = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" className='border-1'>
    <Row>
      <Col sm={3}>
        <Nav variant="tabs" className="flex-column border-1 m-2 p-2 ">
          <Nav.Item >
            <Nav.Link eventKey="first" className='text-dark' disabled><b>Products </b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second" className='text-dark'><b>Porducts List</b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third" className='text-dark'><b>Inventory </b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="fourth" className='text-dark'><b>Stoktakes </b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="five" className='text-dark'><b>Stock Order </b></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="six" className='text-dark'><b>Suppliers </b></Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={9}>
        <Tab.Content className='m-5 text-dark'>
          <Tab.Pane eventKey="first" disabled>
            
          </Tab.Pane>
          <Tab.Pane eventKey="second">
             <ProductsCard />
             <ProductListCard />
              
            </Tab.Pane>
          <Tab.Pane eventKey="third">
            <h2>Inventory</h2>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
          <StockstakesCard />
          <StokesCards />
          </Tab.Pane>
          <Tab.Pane eventKey="five">
            <h2>Stock order</h2>
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