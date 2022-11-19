import React from 'react';
import { GrClose} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';


const HearAbout = () => {
    const navigate = useNavigate()

  const handleNext=()=>{
    navigate('/setupDone')
  }
    return (
        <section>
        <div className='detailUpper px-5 d-flex justify-content-between align-items-center'>
                  <div>
                    <button type='button' class="btn btn-link linkButton"><GrClose/></button>
                    <button type="button" class="btn btn-link linkButton">Previous</button></div>
                  <div><button onClick={handleNext} type="button" class="btn btn-secondary nextButton">Next Step</button></div>
            </div>
            <hr
        style={{
          background: 'gray',height: '3px',
        }}
      />
         <div >
             <p >Business setup</p>
             <h3 className='text-center'>How did you hear about OUTLETCONTROL ?</h3>
             
                <div className='teamMember'>
      
        <input className='mt-5 mx-4' type="radio" name="0" id="" value="" />
         <label htmlFor="team1">Recommended by a friend</label> 
         <br />
         <input className=' mt-5 mx-4' type="radio" name="0" id="" value="" /><label htmlFor="">Search engine (e.g. Google, Yahoo)</label>
         <br />
         <input className='mt-5 mx-4' type="radio" name="0" id="" value="" /><label htmlFor="">Social media</label>
         <br />
         <input className=' mt-5  mx-4' type="radio" name="0" id="" value="" /><label htmlFor="">Magazine ad</label>
         <br />
         <input className=' mt-5  mx-4' type="radio" name="0" id="" value="" /><label htmlFor="">Ratings website (e.g. Capterra, Trustpilot)</label>
         <br />
         <input className=' my-5  mx-4' type="radio" name="0" id="" value="" /><label htmlFor="">Other</label>
         

         
                </div>
         </div>
     </section>
    );
};

export default HearAbout;