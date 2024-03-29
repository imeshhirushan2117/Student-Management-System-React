import * as React from 'react';
import Button from '../../common/Button/Button';
import TextField from '../../common/TextField/TextField'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import { useState , useEffect } from 'react';
import instance from '../../services/Axious'
import {AlertComponent} from '../../common/Aleart/Aleare'; 
import ViewStudent from '../../Pages/ViewStudent/ViewStudent';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCad({ open, handleClose, children, updateData , changeUpdate}) {
  console.log(updateData);
  const [name, setName] = useState(updateData?.name);
  const [age, setAge] = useState(updateData?.age);
  const [address, setAddress] = useState(updateData?.address);
  const [contact, setContact] = useState(updateData?.contact);

  const update = () => { 
    instance.put('/student/update/'+updateData.id, {
      student_name: name,
      student_age: age,
      student_address: address,
      student_contact: contact
    })


      .then((response) => {
        changeUpdate()
          AlertComponent('success','Success...', 'Student Update Success!')
      })
      .catch((error) => {
        AlertComponent('error','Oops...', 'Something went wrong!')
        console.error(error);
      });
  }

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      {children}

      <Box sx={{ flexGrow: 1, padding: '40px' }}>
        <Grid container spacing={3}>

          <Grid item xs={6}>
            <TextField lable={'Name'} value={name} width={'100%'} onChange={(val) => setName(val.target.value)} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Age'} value={age} width={'100%'} onChange={(val) => setAge(val.target.value)} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Address'} value={address} width={'100%'} onChange={(val) => setAddress(val.target.value)} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Contact'} value={contact} width={'100%'} onChange={(val) => setContact(val.target.value)} />
          </Grid>

          <Grid item xs={6}>
            <Button name={'Update'} width={'100%'} color={'success'} onClick={() => update()} />
          </Grid>

          <Grid item xs={6}>
            <Button name={'Exit'} width={'100%'} color={'error'} onClick={handleClose} />
          </Grid>

        </Grid>
      </Box>
      
    </Dialog>

  );
}