import React from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ClientList from './ClientList';

const ClientsAll = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="second">
      <Row>
        <Col sm={2}>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Clients</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Clients list</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="forth">Automated messages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Notifications</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">Clients list</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <p>old</p>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
             <ClientList/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
             <ClientList/>
            </Tab.Pane>
            <Tab.Pane eventKey="forth">
             <ClientList/>
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
             <ClientList/>
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
             <ClientList/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    );
};

export default ClientsAll;