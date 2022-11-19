import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {IoReorderThreeOutline } from 'react-icons/io5';
import {BsMenuButtonWide } from 'react-icons/bs';
import '../../style/partials/ANUService.less'

const Servicemenu = () => {
  const [toggle, setToggle]= useState(true)
    return (
       <div style={{margin:"10px 200px"}}>
         <div className='d-flex justify-content-between '>
            <div>
                <p style={{fontSize:'22px'}}>Settings .  <span style={{fontWeight:'semibold'}}>Services menu</span></p><br />
                <h4 style={{fontSize:' 38px', fontWeight:''}}>Services menu</h4>
            </div>
            <div className='d-flex'>
            <Dropdown className='p-2' style={{marginRight:'15px'}}>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
       Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
            <Dropdown className='p-2'>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Add New
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">New Service </Dropdown.Item>
        <Dropdown.Item href="#/action-2">New Category </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
           
            </div>
        </div>
        <div className='d-flex align-items-center' style={{height:"88px", backgroundColor:'#E5E5E5', marginBottom:'30px'}}>
         <div className=' toggle' onClick={()=>{
          setToggle(!toggle)
         }}>
          {toggle ? <h4 className='togglebtnwt'><BsMenuButtonWide/></h4> : <h4 className='togglebtngr'><BsMenuButtonWide/></h4> }
         </div>
        </div>
        <div>
          <div className='d-flex flex-row m-3 ms-3'> <span className='fs-4'><IoReorderThreeOutline/></span><h2>Hair</h2></div>
        </div>
        <div className=''>
        <div className='p-4 d-flex justify-content-between borderService'>
           <div> <h4>< IoReorderThreeOutline/>Haircut</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹40</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between bordermidle'>
           <div> <h4>< IoReorderThreeOutline/>Hair Color</h4></div>
            <div><h4 className='text-muted'>1h 15min</h4></div>
            <div><h4 className='text-dark'>₹57</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between bordermidle'>
           <div> <h4>< IoReorderThreeOutline/>Blow Dry</h4></div>
            <div><h4 className='text-muted'>45min</h4></div>
            <div><h4 className='text-dark'>₹35</h4></div>
        </div>
        <div className='p-4 d-flex justify-content-between bordermidle'>
           <div> <h4>< IoReorderThreeOutline/>Balayage</h4></div>
            <div><h4 className='text-muted'>2h 30min</h4></div>
            <div><h4 className='text-dark'>₹150</h4></div>
        </div>
        </div>
        <div>
          <div className='d-flex flex-row m-3 ms-3'> <span className='fs-4'><IoReorderThreeOutline/></span><h2>Face</h2></div>
        </div>
        <div  className='p-4 d-flex justify-content-between borderService'>
           <div> <h4>< IoReorderThreeOutline/>Facial</h4></div>
            <div><h4 className='text-muted'>1h</h4></div>
            <div><h4 className='text-dark'>₹115</h4></div>
        </div>
       </div>
    );
};

export default Servicemenu;