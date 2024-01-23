import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../services/Axious'
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogCad from '../../components/DialogCad/DialogCad'


export default function ViewStudent() {

  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false)

const handleDelete =() => {
  
}

const openPopup = () => {
setPopup(true)
}

const closePopup = () => {
  setPopup(false)
}


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 100 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, },
  { field: 'address', headerName: 'Address', width: 100 },
  { field: 'contact', headerName: 'Contact', width: 100 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <IconButton
        color='info'
          aria-label="edit"
           onClick={openPopup}
        >
          <EditIcon />
        </IconButton>
        <IconButton
        color='error'
          aria-label="delete"
          onClick={() => handleDelete(params.row.id)}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    ),
  },

];

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
          address: val.student_address,
          contact: val.student_contact,
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
     <DialogCad open={popup} handleClose={closePopup} />
    </div>
  )
}
