import * as React from 'react';
import Button from '../../common/Button/Button';
import TextField from '../../common/TextField/TextField'
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogCad({ open, handleClose, children}) {

  const [popup , setPopup] = useState(true)
  const navigate = useNavigate();

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
            <TextField lable={'Name'} width={'100%'} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Age'} width={'100%'} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Address'} width={'100%'} />
          </Grid>

          <Grid item xs={6}>
            <TextField lable={'Contact'} width={'100%'} />
          </Grid>

          <Grid item xs={6}>
            <Button name={'Update'} width={'100%'} color={'success'} />
          </Grid>

          <Grid item xs={6}>
            <Button name={'Exit'} width={'100%'} color={'error'}  onClick={handleClose}/>
          </Grid>

        </Grid>
      </Box>


    </Dialog>

  );
}