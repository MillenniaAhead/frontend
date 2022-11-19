import React from 'react';
import Header from './Header';
import Servicemenu from './Servicemenu';
import Sidebar from './Sidebar';

const OutletControlService = () => {
    return (
        <div>
            {/* <div style={{width:'100vw'}}><Header></Header></div> */}
            <div className='d-flex outlet'>
               {/* <div style={{width:'10vw'}}> <Sidebar></Sidebar></div> */}
               {/* <div style={{width:'90vw'}}> <Servicemenu></Servicemenu></div> */}
             <Servicemenu></Servicemenu>
            </div>
        </div>
    );
};

export default OutletControlService;