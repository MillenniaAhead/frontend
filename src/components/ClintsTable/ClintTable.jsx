import React  from 'react'
import { TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

const ClintTable = () => {
 
  return (
    <TableContainer component={Paper}>
      <Table aria-label = 'sample table'>
          <TableHead>
              <TableRow>
                <TableCell><b>Clint name </b></TableCell>
                <TableCell><b>Mobile number</b></TableCell>
                <TableCell><b>Gender</b></TableCell>
                <TableCell><b>Reviews</b></TableCell>
                <TableCell><b>Total Sales</b></TableCell>
              </TableRow>
           </TableHead> 
        <TableBody>
         {
          tableData.map(row => (
            
              <TableRow 
                 key = {row.Clint_name}     
              >
                <TableCell>
                  <Stack direction="row" spacing={2} className="m-2 ">
                      <Avatar className='m-2 fs-2 w-40 h-40' > {row.avatar}</Avatar>
                    <div className='m-1 '>
                      <Link  >{row.Clint_name} </Link><br/>{row.email}
                      </div>
                  </Stack>
                
                </TableCell>
                <TableCell>{row.Mobile_number}</TableCell>
                <TableCell>{row.gender} </TableCell>
                <TableCell>{row.reviews}</TableCell>
                <TableCell>{row.total_sales}</TableCell>
              </TableRow>
            
          ))
         }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
const tableData = [{
  "avatar": "J",
  "Clint_name": "Jack Doe",
  "email": "ckeam0@bing.com",
  "Mobile_number":  '-',
  "gender": "Male",
  "reviews": "-",
  "total_sales": "-"
}, {
  "avatar": "M",
  "Clint_name": "Mack Doe",
  "email": "ngreveson1@rambler.ru",
  "Mobile_number":'-',
  "gender": "Male",
  "reviews": "-",
  "total_sales": "-"
}, {
  "avatar": "L",
  "Clint_name": "Liam  Doe",
  "email": "cdidomenico2@walmart.com",
  "Mobile_number":'-',
  "gender": "Male",
  "reviews": "-",
  "total_Sales": "-"
}, {
  "avatar": "S",
  "Clint_name": "Shane Doe",
  "email": "svandermark3@ihg.com",
  "Mobile_number":'-',
  "gender": "male",
  "reviews": "-",
  "total_sales": "-"
}, {
  "avatar": "L",
  "Clint_name": "Look Doe",
  "email": "agreated4@jugem.jp",
  "Mobile_number": "-",
  "gender": "Male",
  "reviews": "-",
  "total_sales": "-"
}]
export default ClintTable

