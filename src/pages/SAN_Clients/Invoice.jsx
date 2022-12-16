import React from 'react';
import filter from '../../images/ClientList/filers.jpg'
import invoice from '../../images/ClientList/invoice.png'
import Box from '@mui/material/Box';

const Invoice = () => {
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
        width: 1000,
        height: 328,
        border: '1px solid rgba(217, 217, 217, 0.80)',
        borderRadius: '10px',
        margin:'0px auto'
        
      }}
    ><img className='mx-auto d-block my-5' src={invoice} alt="" /> 
    <p className='text-center'><span className='fs-3 fw-bolder'>No invoices history</span> <br />
    All invoices for this client will appear here. Make a <br />
sale to create your first invoice.</p>
  </Box>
        </div>
    );
};

export default Invoice;