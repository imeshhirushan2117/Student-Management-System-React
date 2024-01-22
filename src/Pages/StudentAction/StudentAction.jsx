import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '../../common/TextField/TextField';
import Button from '../../common/Button/Button';
import { createTheme } from '@mui/material/styles';


export default function StudentAction() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <TextField lable={'Student Name'} width={'100%'} />
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



       <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button  name={'Save'} width={'100%'} color={'success'}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Update'} width={'100%'} color={'warning'}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Deleted'} width={'100%'} color={'error'}/>
        </Grid>

        <Grid sx={{marginTop:'20px'}} item xs={6}>
          <Button name={'Clear'} width={'100%'} color={'info'}/>
        </Grid>


      </Grid>
    </Box>
  )
}
