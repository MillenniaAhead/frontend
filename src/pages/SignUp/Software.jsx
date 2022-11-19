import React from 'react';
import { GrClose} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';


const Software = () => {
    const navigate = useNavigate()

  const handleNext=()=>{
    navigate('/hear')
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
                <h3 className='text-center'>Which software are you currently using ?</h3>
                <p>If you’re looking to switch, we can help speed up your business setup and import your data in to your new  account.</p>
                   <div className='teamMember mb-5'>
         
           <input className='mt-5 mx-4' type="radio" name="me" id="" value="" />
            <label htmlFor="team1">Acuity</label> 
            <br />
            <input className=' my-1 mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Booksy</label>
            <br />
            <input className='my-1 mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Janeapp </label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Kitomba</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Square</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Mind body</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Ovatu</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Phorest</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Salon Iris</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Shortcuts</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Treatwell</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Squire</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Styleseat</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Timely</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Vagaro</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">Zenoti</label>
            <br />
            <input className=' my-1  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">I’m not using any software</label>
            <br />
            <input className=' mt-1 mb-5  mx-4' type="radio" name="me" id="" value="" /><label htmlFor="">other</label>
            
            </div>
           </div>
            
        </section>
    );
};

export default Software;