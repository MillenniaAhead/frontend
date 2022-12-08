import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
const StockstakesCard = () => {
  return (
    <Stack direction="horizontal" gap={2}>
    <div className="">
      <h2>Stokestakes</h2>
      <p>Count and record the amount and value of stocke your business holds . <Link>Learn more</Link> </p>
    </div>
    
    <div className="bg-light border ms-auto"><Button variant="secondary">Add new </Button></div>
  </Stack>
  )
}

export default StockstakesCard