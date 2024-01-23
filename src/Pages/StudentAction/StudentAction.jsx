import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '../../common/TextField/TextField';
import Button from '../../common/Button/Button';
import { createTheme } from '@mui/material/styles';
import { DeselectOutlined } from '@mui/icons-material';
import { useState } from 'react';
import instance from '../../services/Axious'
import {AlertComponent} from '../../common/Aleart/Aleare';

export default function StudentAction() {
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [address,setAddress] = useState("")
  const [contact,setContact] = useState("")

  const save = () => { 
    instance.post('/student/save',{
      student_name:name,
      student_age:age,
      student_address:address,
      student_contact:contact
    })
    .then(function (response) {
      console.log(response);
      AlertComponent('success','Success...', 'Student Save Success!')
      clearText()
    })
    .catch(function (error) {
      console.log(error);
      AlertComponent('error','Oops...', 'Something went wrong!')
    });
  }

  const update = () => {
    console.log("update");
  }

  const deleted = () => {
    console.log("deleted");
  }

  const clear = () => {
    clearText();
  }

  const clearText = () => {
    setName("");
    setAge("");
    setAddress("");
    setContact("");
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <TextField value={name} lable={'Student Name'} width={'100%'} onChange={(val) => setName(val.target.value)} />
        </Grid>

        <Grid item xs={6}>
          <TextField value={age}  lable={'Age'} width={'100%'} onChange={(val) => setAge(val.target.value)}/>
        </Grid>

        <Grid item xs={6}>
          <TextField value={address}  lable={'Address'} width={'100%'} onChange={(val) => setAddress(val.target.value)}/>
        </Grid>

        <Grid item xs={6}>
          <TextField value={contact}  lable={'Contact'} width={'100%'} onChange={(val) => setContact(val.target.value)}/>
        </Grid>



       <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button  name={'Save'} width={'100%'} color={'success'} onClick={() => save()}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Update'} width={'100%'} color={'warning'} onClick={() => update()}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Deleted'} width={'100%'} color={'error'} onClick={() => deleted()}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Clear'} width={'100%'} color={'info'} onClick={() => clear()}/>
        </Grid>


      </Grid>
    </Box>
  )
}
