import React from 'react';

const Singleservice = () => {
    return (
        <div style={{marginTop:'10vh'}}>
            <h2 className='text-center'>Add a new single service</h2>
            <div className='basic'>
                <div style={{borderBottom:'1px solid gray',  padding: "20px 0px"}}>
                <h4 style={{marginLeft:"20px"}}className=''>Basic info</h4>
                <p style={{textAlign:'left', marginLeft:"20px"}}>Add a service name and choose the treatment type.</p>
                </div>
                <div style={{ marginLeft:"20px", padding: "20px 0px"}}>
                    <h5 className='mb-2'>Service name </h5>
                    <input type="text" style={{width:'620px', height:'60px'}} />

                    <h4 className='mt-3 mb-2'>Treatment type  </h4>
                    <input type="text" placeholder='Select Treatment Type' style={{width:'620px', height:'60px', fontSize:'21px', paddingLeft:'35px'}} />
                    <p className='text-muted' style={{textAlign:'left'}}>Choose the most relevant treatment type. This won’t be visible to your clients. </p>
                    <h4 className='mt-3 mb-2'>Service category</h4>
                    <input type="text" placeholder='No service category selected' style={{width:'620px', height:'60px', fontSize:'21px', paddingLeft:'35px'}} />
                    <div className='mt-3 mb-2 d-flex justify-content-between'><h4 >Service description</h4> <p>0/1000</p></div>
                    <textarea name="" id="" cols="81" rows="10"></textarea>
                </div>
                
            </div>
        </div>
    );
};

export default Singleservice;