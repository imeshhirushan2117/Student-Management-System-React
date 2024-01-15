import React from 'react'
import TextInput from "../../common/TextInput/MyTextInput"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '../../common/Button/MyButton'




export default function StudentActivity() {

  return (
    <>


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6} md={6} >
            <TextInput label="Student Id" color="#27AE60" />
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
            <Button name="Save" color='#16a085' width='90%' />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Update" color='#f39c12' width='90%' />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Deleted" color='#c0392b' width='90%' />
          </Grid>

          <Grid xs={6} md={6}>
            <Button name="Clear" color='#2c3e50' width='90%' />
          </Grid>

        </Grid>
      </Box>
    </>
  )
}
