import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import client from '../../images/ClientList/client.jpg'

import '../CSS/ClientList.css'

const ClientList = () => {
    return (
        <div>
            <div>
            <div className='d-flex justify-content-between mx-3 mt-5 '>
            <div>
                <div className='d-flex align-items-center'><h2>Clients list</h2> <p className='three '>3</p></div>
                <p className='fs-5'>View, add, edit and delete your client’s details. Learn more</p>
            </div>
            <div className='d-flex align-items-start'>
            <Dropdown className='p-2' style={{marginRight:'15px'}}>
      <Dropdown.Toggle style={{height:"60px", width:"150px"}} variant="light" id="dropdown-basic">
       Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            
    <button type="button" style={{height:"60px", width:"150px", marginTop:'8px'}} class="btn btn-secondary" >Add client</button>

            </div>
        </div>
            </div>
            <div className='container ' >
                <div className="row border rounded mx-3" style={{height:'280px', backgroundColor: 'rgba(217, 217, 217, 0.16)'}}>
                    <div className='col-8 '>
                        <h3 className='mt-3 ms-4'>Set up your Outlet Control profile for clients to book <br />
online.</h3>
                    <p className='fs-5 ms-4'>Free up time and get your clients self booking online 24/7.</p>
                    <button className='ms-4 mt-2 border-0 bg-white py-2 px-4 rounded'>start Now</button>
                    </div>
                    <div className='col-4 client '>
                   
                <Card className=' mx-auto' style={{ width: '215px', marginTop:'85px' }}>
      <Card.Img variant="top" src={client} />
      <Card.Body>
        
      </Card.Body>
    </Card>
                
                 
                    </div>
             </div>

        </div>
            <div className='border rounded mx-4 mt-4 d-flex justify-content-between align-items-center
' style={{height:'90px', 
                          backgroundColor:'rgba(217, 217, 217, 0.16)'}}>
                           <div className='d-flex align-items-center'>
                           <div>
                           <input style={{width:'560px'}} className=' border-0 rounded-pill ms-3 
                              text-center text-secondary py-2' type="text" placeholder='Search by 
                               name, email or mobile number'/>
                           </div>
                           <div className='mt-3 ms-3'>
                                <p className='fs-5 '>filter</p>
                           </div>
                           </div>
                           <div>
                            <p className='fs-5 '>First name(A-Z)</p>
                           </div>

            </div>
        </div>
    );
};

export default ClientList;