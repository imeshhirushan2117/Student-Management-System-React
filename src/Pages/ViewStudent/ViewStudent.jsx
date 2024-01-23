import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../services/Axious'
import { useState, useEffect } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, },
  { field: 'address', headerName: 'Address', width: 100 },
  { field: 'contact', headerName: 'Contact', width: 100 },
];

const rows = [
  // { id: 1, name: 'Imesh', age: 24, address: 'Panadura', contact: '0779201232' },
  // { id: 2, name: 'Hirushan', age: 18, address: 'Horana', contact: '0727681232' }
];


export default function ViewStudent() {

  const [data, setData] = useState([])

  useEffect(() => {
    instance({
      method: 'get',
      url: '/student/getAll',
    })
      .then(function (response) {
        const array = response.data.map(val => ({
           id: val.id, 
           name: val.student_name,
            age: val.student_age, 
            address:val.student_address, 
            contact: val.student_contact 
        }));

        setData(array);
      });
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
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
