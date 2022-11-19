import React from 'react';
import '../../style/partials/Signup.less'
import setUp from '../images/setdone/right.jpg'
const setUpDone = () => {
    return (
       
         <div >
            <img style={{marginTop:"35vh",}} className=" mx-auto d-flex justify-content-center " src={setUp} alt="" /> <br />
             <h3 className='text-center'>Yes, your business is set up here!</h3>
        </div>
        
     
    );
};

export default setUpDone;