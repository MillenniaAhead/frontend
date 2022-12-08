import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import DropDrownBtn from './DropDrownBtn'
import Button from 'react-bootstrap/Button';

const ProductsCard = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="">
        <h2>Product List</h2>
        <p>Add and manage your product in stock. <Link>Learn more</Link> </p>
      </div>
      <div className="bg-light border ms-auto"><DropDrownBtn/></div>
      <div className="bg-light border"><Button variant="secondary">Add new product</Button></div>
    </Stack>
  )
}

export default ProductsCard