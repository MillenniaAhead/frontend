import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const StockBtn = () => {
  return (
    <DropdownButton  id="dropdown-item-button" title="Export" variant="outline-secondary">
    <Dropdown.ItemText>Option</Dropdown.ItemText>
    <Dropdown.Item as="button">Action</Dropdown.Item>
    <Dropdown.Item as="button">Another action</Dropdown.Item>
    <Dropdown.Item as="button">Something else</Dropdown.Item>
  </DropdownButton>
  )
}

export default StockBtn