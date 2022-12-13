import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const StokesCards = () => {
  return (
      <div> 
          <Card className='text-center'>
            <Card.Body>
                <div className='mt-5'>
                <h4>No Stocktakes here yet</h4>
                <p className='text-secondary'>Your stocktakes will appear here</p>
                <Button variant="secondary">Add Stocktakes</Button>
                </div>
            </Card.Body>
           </Card>
           
      </div>
  )
}

export default StokesCards