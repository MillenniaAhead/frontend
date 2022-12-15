import React from 'react'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import StockBtn from './StockBtn';
import StockordersProMod from './StockordersProMod';
const StockerOrder = () => {
  return (
    <Stack direction="horizontal" gap={3}>
    <div className="">
      <h2>Stock Orders</h2>
      <p>Add manage your product in stock. <Link>Learn more</Link> </p>
    </div>
    <div className="bg-light border ms-auto"><StockBtn /></div>
      <StockordersProMod />
  </Stack>
  )
}

export default StockerOrder