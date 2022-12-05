import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function setup() {
  return (
   
    <Container>
         <div><h1>Business settings</h1>
    <p>Manage all your Fresha settings in one place</p> </div>
      <Row className="justify-content-md-center">
        <Col xs lg="5">
        <div class="list-group">    
        <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">Account setup</h5>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Business details</h5>
    </div>
    <p class="mb-1">Manage settings such as your business name and time zone</p>

  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Locations</h5>
    </div>
    <p class="mb-1">Manage multiple outlets for your business</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Online booking</h5>
    </div>
    <p class="mb-1">Adjust your business info and profile images displayed online</p>
  </a>
  </div>
  </div>
</div>
        </Col>
        <Col xs lg="5">
        <div class="list-group">    
        <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">Clients</h5>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Client notifications</h5>
    </div>
    <p class="mb-1">Review messages sent to clients about their appointments</p>

  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Referral sources</h5>
    </div>
    <p class="mb-1">MSet up custom sources to track how clients found your business</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Cancellation reasons</h5>
    </div>
    <p class="mb-1">Track why clients did not arrive for their appointments</p>
  </a>
  </div>
  </div>
</div>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
      <Col xs lg="5">
        <div class="list-group">    
        <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">Services</h5>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Services menu</h5>
    </div>
    <p class="mb-1">Add, edit and delete the types of services available for appointment bookings</p>

  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Vouchers</h5>
    </div>
    <p class="mb-1">Add, edit and delete the types of vouchers available for sale</p>
  </a>
  
  <a href="/membership" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Memberships</h5>
    </div>
    <p class="mb-1">Add, edit and delete multi session memberships available for sale</p>
  </a>
  </div>
  </div>
</div>
        </Col>
        <Col xs lg="5">
        <div class="list-group">    
        <div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">Account setup</h5>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Business details</h5>
    </div>
    <p class="mb-1">Manage settings such as your business name and time zone</p>

  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Locations</h5>
    </div>
    <p class="mb-1">Manage multiple outlets for your business</p>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Online booking</h5>
    </div>
    <p class="mb-1">Adjust your business info and profile images displayed online</p>
  </a>
  </div>
  </div>
</div>
        </Col>
      </Row>
      </Container>

  )
}

export default setup