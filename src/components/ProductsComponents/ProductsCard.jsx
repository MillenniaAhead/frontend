import React from 'react'
import Stack from 'react-bootstrap/Stack'
import DropDrownBtn from './DropDrownBtn'
import { Link } from 'react-router-dom';
import ProductsModal from './ProductsModal';




const ProductsCard = () => {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="">
        <h4> <b>Product List </b></h4>
        <p>Add and manage your product in stock. <Link> Learn more </Link> </p>
      </div>
      <div className="bg-light border ms-auto"><DropDrownBtn/></div>
      <div> 
       <ProductsModal />
     </div>
      
    </Stack>
  )
}

export default ProductsCard