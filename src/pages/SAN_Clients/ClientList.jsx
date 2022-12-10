import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const ClientList = () => {
    return (
        <div>
            <div>
            <div className='d-flex justify-content-between mx-3 mt-5 '>
            <div>
                <h2>Clients list</h2>
                <p>View, add, edit and delete your client’s details. Learn more</p>
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
            
    <button type="button" style={{height:"60px", width:"150px"}} class="btn btn-secondary" >Add client</button>

            </div>
        </div>
            </div>
        </div>
    );
};

export default ClientList;