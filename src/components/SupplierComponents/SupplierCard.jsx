import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
const SupplierCard = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="">
        <h2>Suppliers </h2>
        <p>Add and manage details of your suppliers. <Link>Learn more</Link> </p>
      </div>
    
      <div className="bg-light border ms-auto"><Button variant="secondary">Add new </Button></div>
    </Stack>
  )
}

export default SupplierCard