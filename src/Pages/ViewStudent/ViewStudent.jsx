import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import instance from '../../services/Axious'
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DialogCad from '../../components/DialogCad/DialogCad'
import {AlertComponent} from '../../common/Aleart/Aleare';  


export default function ViewStudent() {

  const [data, setData] = useState([])
  const [popup, setPopup] = useState(false);
  const [updateId, setUpdateId] = useState()

  const handleDelete = (id) => {
    instance.delete('/student/delete/'+id)
      .then(response => {
        console.log(response)
        fetchData()
         AlertComponent('success','Success...', 'Student Deleted Success!')
        
      })
      .catch(error => {
        console.error(error);
          AlertComponent('error','Oops...', 'Something went wrong!')
      });
      
  }

  const changeUpdate = () => {
    fetchData()
    closePopup()
  }



  const openPopup = (id) => {
    setPopup(true)
    setUpdateId(id)
  }

  const closePopup = () => {
    setPopup(false)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 100 },
    { field: 'age', headerName: 'Age', type: 'number', width: 100 },
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
            // onClick={openPopup}
            onClick={() => {openPopup(params.row.id)}}
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


  const fetchData = ()=> {
    instance({
      method: 'get',
      url: '/student/getAll',
    })
      .then(function (response) {
        const array = [];
        response.data.forEach(val => {
          array.push({
            id: val.id,
            name: val.student_name,
            age: val.student_age,
            address: val.student_address,
            contact: val.student_contact,
          });
        });
        setData(array);
      });
  }

  useEffect(() => {
    fetchData(setData)
  }, []);



  return (
    <div style={{ height: 500, width: '100%' }}>

      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <DialogCad open={popup} handleClose={closePopup} id={updateId} changeUpdate={()=>changeUpdate()}/>
    </div>
  )
}
