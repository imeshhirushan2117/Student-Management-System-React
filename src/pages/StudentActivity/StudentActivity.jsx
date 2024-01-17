import React, { useState } from 'react'
import TextInput from "../../common/TextInput/MyTextInput"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../../common/Button/MyButton'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';


export default function StudentActivity() {
  const [id, setId] = useState("");
  const [name, setname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");



  const save = (val) => {
    console.log("Save");
    // onchange(val.target.val)
 
  }

  const update = () => {
    console.log("Update");
  }

  const deleted = () => {
    console.log("Deleted");
  }

  const clear = () => {
    console.log("Clear");
  }
  return (

    < >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={6} >

            <TextInput label="Student Id"
              color="#27AE60"

              change={(val) => setId(val.target.value)}
            />
           
          </Grid>

          <Grid xs={6} md={6}>
            <TextInput label="Student Name " color="#27AE60" />
          </Grid>

          <Grid xs={6} md={6}>
            <TextInput label="Age" color="#27AE60" />
          </Grid>

          <Grid xs={6} md={6}>
            <TextInput label="Address" color="#27AE60" />
          </Grid>

          <Grid xs={6} md={6}>
            <TextInput label="Contact" color="#27AE60" />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
        <Grid container spacing={2}>

          <Grid xs={6} md={6} marginBottom='15px'>
            <Button name="Save" color='#16a085' width='90%' onClick={() => { save() }} />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Update" color='#f39c12' width='90%' onClick={() => { update() }} />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Deleted" color='#c0392b' width='90%' onClick={() => { deleted() }} />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Clear" color='#2c3e50' width='90%' click={() => { clear() }} />
          </Grid>

        </Grid>
      </Box>
    </>
  )
}
