import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InputAdornment } from '@mui/material';
import InputGroup from 'react-bootstrap/InputGroup'
import Image from "react-bootstrap/Image";
import { register } from '../redux/membership/action';
import { useDispatch } from 'react-redux';
import '../style/style.css';

const MembrshipForm = () => {
const [membershipDetails, setMembershipDetails] = useState({
   id:Math.random(), name:"", description:"", session:"", numSession:"", month:"", rs:"", taxrate:"notax", terms:""
});

const [descriptionCount, setDescriptionCount] = useState(0);
const [termsCount, setTermsCount] = useState(0);

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

let name, value;
  const handleInput = (e) => {
    e.preventDefault()
    name = e.target.name;
    value= e.target.value;
    console.log(value);
    setMembershipDetails({...membershipDetails, [name]:value});
    if(name === "description"){
        setDescriptionCount(e.target.value.length);
    }
    if(name === "terms"){
        setTermsCount(e.target.value.length);
    }
    console.log("info des >>" + JSON.stringify(membershipDetails))
   
  }

  const dispatch = useDispatch();
  const memberName = membershipDetails.name;
  const sendInfo = (e) => {
    e.preventDefault();
    dispatch(register(membershipDetails));
  }
  return (
    <>
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-white justify-content-between"> 
    <button type="button" className="btn btn-light btn-lg">X</button>          
    <form className="form-inline">
  <button className="btn btn-dark btn-lg" onClick={sendInfo} >Create membership</button>  
  </form>
</nav>
<div className="container" >
<h1>Create a membership</h1>
<Card className="mx-auto card">
      <Card.Header as="h2" style={{backgroundColor: "#FFFFFF"}} >
            Basic info
          </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Membership name</Form.Label>
            <Form.Control onChange={handleInput}
            value={membershipDetails.name} 
            name="name"
            style={{width: "60%"}} 
            type="text" placeholder="Add membership name" />
          </Form.Group>
          <Form.Group className="mb-3" style={{width: "60%"}} controlId="exampleForm.ControlTextarea1">
          <Form.Label style={{display: "flex", justifyContent: "space-between"}}><span>Membership description</span> <span style={{color: "rgba(0, 0, 0, 0.6)"}}>{descriptionCount}/300</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add membership description"
              maxLength={300}
              onChange={handleInput}  
              value={membershipDetails.description} 
              name="description"
            />
          </Form.Group>
        </Card.Body>
      </Card>
      <Card className="mx-auto card">
      <Card.Header style={{backgroundColor: "#FFFFFF"}}>
      <h2>Services and Session</h2>
      <Card.Text>
          Add services and sessions included in the membership
        </Card.Text>
          </Card.Header>
          
        <Card.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Included services</Form.Label>   
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
              type="search"
              placeholder="Search services"
              className="me-2"
              aria-label="Search"
              startAdornment={
                <InputAdornment position="start">
                  
                </InputAdornment>
              }
            />
            </Form.Group>
            <hr />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            <div className="servicebtn" style={{display: "flex", justifyContent: "space-between"}} ><span>0 services</span><a onClick={handleShow} className='edit-service'>Edit</a></div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{display: "flex"}}>
              <Form.Group className="mb-3" style={{width: "25%"}} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Sessions</Form.Label>  
                  <Form.Select aria-label="Default select example" 
                  onChange={handleInput} 
                  value={membershipDetails.session}
                  name="session" >  
                  <option value="limited">Limited</option>
                  <option value="unlimited">Unlimited</option>
                </Form.Select>
              </Form.Group>
            <Form.Group className="mb-3" style={{width: "25%", marginLeft: "50px"}} controlId="exampleForm.ControlTextarea1">
              <Form.Label>Number of sessions</Form.Label>  
              <Form.Control type="text" 
              onChange={handleInput}
              value={membershipDetails.numSession}
              name="numSession"/>
          </Form.Group> 
          </Form.Group> 
        </Card.Body>
      </Card>
      <Card className="mx-auto card">
      <Card.Header style={{backgroundColor: "#FFFFFF"}}>
      <h2>Pricing and Payment</h2>
      <Card.Text>
      Choose how you'd like your clients to pay.
        </Card.Text>
          </Card.Header>
        <Card.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{display: "flex"}}>
              <Form.Group className="mb-3" style={{width: "25%"}} controlId="exampleForm.ControlTextarea1">
                <Form.Label></Form.Label>  
                  <Form.Select aria-label="Default select example" 
                  onChange={handleInput}
                  value={membershipDetails.month}
                  name="month">  
                  <option value="1month">1 month</option>
                  <option value="2month">2 month</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{width: "25%", marginLeft: "50px"}}>
              <Form.Label></Form.Label>  
              <InputGroup className="mb-3" size="sm" style={{ height: "10%"}}>
              <InputGroup.Text id="basic-addon1" style={{background: "#FFFFFF"}}>&#8377;</InputGroup.Text>
              <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={handleInput}
                value={membershipDetails.rs}
                name="rs"
              />
            </InputGroup>
            </Form.Group>
          </Form.Group> 
        </Card.Body>
        <Card.Footer style={{backgroundColor: "#FFFFFF"}}>
      <h3>Tax rate</h3>
      <Form.Group className="mb-3" style={{width: "25%"}} controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tax rate</Form.Label>  
                <Form.Select aria-label="Default select example"
                onChange={handleInput}
                value={membershipDetails.taxrate}
                name="taxrate">  
                <option value="notax">No tax</option>
            </Form.Select>
            </Form.Group>
      </Card.Footer>
      </Card>
      <Card className="mx-auto card">
      <Card.Header style={{backgroundColor: "#FFFFFF"}}>
      <h2>Color customisation</h2>
      <Card.Text>
      Choose how you'd like your clients to pay.
        </Card.Text>
          </Card.Header>         
        <Card.Body >
              <div style={{display: "flex"}}>
              <button className="dot" style={{backgroundColor: "#2B85E8"}} onClick={handleInput} name="colorcode" value="#2B85E8"/>
              <button className="dot" style={{backgroundColor: "#192639"}} onClick={handleInput} name="colorcode" value="#192639"/>
              <button className="dot" style={{backgroundColor: "#00A284"}} onClick={handleInput} name="colorcode" value="#00A284"/>
              <button className="dot" style={{backgroundColor: "#E68F20"}} onClick={handleInput} name="colorcode" value="#E68F20"/>
              <button className="dot" style={{backgroundColor: "#863FF5"}} onClick={handleInput} name="colorcode" value="#863FF5"/>             
              </div>             
        </Card.Body>
      </Card>
      <Card className="mx-auto card">
      <Card.Header style={{backgroundColor: "#FFFFFF"}}>
      <h2>Online sales</h2>
      <Card.Text>
      Choose if you would like to sell your membership online.
        </Card.Text>
          </Card.Header>
          
        <Card.Body >
        <Form.Group className="mb-3" style={{width: "60%"}} controlId="exampleForm.ControlTextarea1">
        <Form.Check 
        disabled
        type="switch"
        label="Enable online sales"
        id="disabled-custom-switch"
        style={{transform: "scale(1.2)", marginLeft: "40px"}}
      />
      </Form.Group>
     
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <div className='salesDiv'>
        <div className='online-text'>
        Online membership sales are coming soon to India with payments in Fresha
        </div>
        <div className='mobile-div'>
        <Image src="mobile.png" className='mobileImg'/>
        </div>
        </div>
    </Form.Group>
        </Card.Body>
      </Card>
      <Card className="mx-auto card">
      <Card.Header style={{backgroundColor: "#FFFFFF"}}>
      <h2>Terms & Conditions</h2>
      <Card.Text>
      If there are any rules attached to your membership it's a good place to mention them.
        </Card.Text>
          </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3" style={{width: "60%"}} controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{display: "flex", justifyContent: "space-between"}}><span >Terms & Conditions (Optional)</span> <span style={{color: "rgba(0, 0, 0, 0.6)"}}>{termsCount}/3000</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Add Terms & Conditions"
              maxLength={3000}
              onChange={handleInput}  
              value={membershipDetails.terms}
              name="terms"
            />
          </Form.Group>
        </Card.Body>
      </Card>
</div>

</>
  )
}

export default MembrshipForm