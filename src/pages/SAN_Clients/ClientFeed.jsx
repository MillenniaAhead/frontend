import React from 'react';
import filter from '../../images/ClientList/filers.jpg'
import Rcalender from '../../images/ClientList/roundCalender.png'
import send from '../../images/ClientList/send.png'


const ClientFeed = () => {
    return (
        <div>
            <div className='d-flex justify-content-between mt-5 mx-3'>
               <div>
               <h1>Client feed</h1>
               </div>
               <div className='d-flex flex-row'>
               <div><img src={Rcalender} alt="" /></div>
               <div style={{width: '150px', height:'48px'}} className=' ms-3 bg-white d-flex justify-content-around align-items-center border-0 rounded-pill'>
                                <h6 className='fs-5 mt-1'>Filters</h6>
                                <img  style={{width:"24px", height:'24px',}} src={filter} alt="" />
                           </div>
               </div>
            </div>
            <form className='bg-white mx-5 d-flex justify-content-between'>
                <input className='border-0 px-5 text-center text-muted' type="text"  placeholder='Add a note...'/>
                <img className='me-3' src={send} alt="" />
            </form>
        </div>
    );
};

export default ClientFeed;