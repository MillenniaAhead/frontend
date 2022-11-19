import React from 'react';
import '../CSS/ANUService.css'
import { BsFolder} from 'react-icons/bs';
import { TbFolders} from 'react-icons/tb';


const Servicetype = () => {
    return (
        <div style={{ marginTop:'30vh'}} >
            <div >
                <h1 className='text-center'>Choose a service type</h1>
            </div>
            <div className='servicetype p-4 d-flex justify-content-between align-items-center my-3' >
                <div >
                    <h3 style={{fontSize:'20px', textAlign:'left'}}>Single Service</h3> 
                    <p style={{fontSize:'20px', textAlign:'left'}} className='text-muted'>Services which can be booked individually</p>
                </div>
                <div style={{fontSize:"30px"}}><BsFolder/></div>
            </div>
            <div className='servicetype p-4 d-flex justify-content-between align-items-center my-3' >
                <div >
                    <h3 style={{fontSize:'20px', textAlign:'left'}}>Package</h3> 
                    <p style={{fontSize:'20px', textAlign:'left'}} className='text-muted'>Multiple services booked together in one appointment</p>
                </div>
                <div style={{fontSize:"30px"}}><TbFolders/></div>
            </div>
        </div>
    );
};

export default Servicetype;