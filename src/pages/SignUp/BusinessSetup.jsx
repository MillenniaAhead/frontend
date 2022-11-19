import React from 'react';
import '../../style/partials/Signup.less'
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { GrLocation, GrClose } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
const BusinessSetup = () => {
  const navigate = useNavigate()

  const handleNext=()=>{
    navigate('/software')
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
                <h3 className='text-center'>Set your location</h3>
                <p>Add your business location so your clients can easily find you.</p>
                <div   style={{width:'835px', margin:'auto'}}>
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Business location</Accordion.Header>
        <Accordion.Body>
        <p className='location'>Where’s your business located?</p>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
        <GrLocation/>
        </InputGroup.Text>
       
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className='d-flex'>
      <input type="checkbox"className='m-1' name="" id="" /> <p>I don’t have a business address ( mobile and online services only)</p>
      </div>
        </Accordion.Body>
        
      </Accordion.Item>
    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default BusinessSetup;