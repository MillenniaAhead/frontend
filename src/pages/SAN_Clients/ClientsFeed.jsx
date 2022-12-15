import React from 'react';
import filter from '../../images/ClientList/filers.jpg'
import Box from '@mui/material/Box';

const ClientsFeed = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mt-5 mx-3'>
               <div>
               <h1>Invoices</h1>
               </div>
               <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px',}} src={filter} alt="" />
                           </div>
            </div>
            <Box
      sx={{
        width: 300,
        height: 300,
        border: '1px solid grey',
        borderRadius: '10px'
        
      }}
    > <h1></h1>
  </Box>
        </div>
    );
};

export default ClientsFeed;