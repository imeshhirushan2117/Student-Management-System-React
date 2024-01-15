import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function Table() {

  const rows = [
    { id: 1, firstName: 'Imesh', age: 24, address:'Panadura',contact:'0779201232' },
    { id: 2, firstName: 'Mishara', age: 20, address:'Matara',contact:'0724569812' },
 
   
  ];

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 130 },
    { field: 'address', headerName: 'Address', width: 130 },
    { field: 'contact', headerName: 'Contact', width: 130 },
  ];

  return (
    <div style={{ height: 'auto', width: '100%' ,background:'#C4F7D4'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection 
      />
    </div>
  )
}
