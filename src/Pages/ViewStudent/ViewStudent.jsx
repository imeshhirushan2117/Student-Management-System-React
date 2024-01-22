import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 100 },
    {field: 'age',headerName: 'Age', type: 'number',width: 90,},
    {field: 'address',headerName: 'Address',width:100},
    {field: 'contact',headerName: 'Contact',width:100},
  ];
  
  const rows = [
    { id: 1,name: 'Imesh', age: 24 ,address:'Panadura',contact:'0779201232'},
    { id: 2,name: 'Hirushan', age: 18 ,address:'Horana',contact:'0727681232'}
  ];
  

export default function ViewStudent() {
  return (
    <div style={{ height: 400, width: '100%' }}>
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
