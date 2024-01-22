import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextFeeld({lable,width,onChange,type}) {
  return (
    <TextField onChange={onChange} id="outlined-basic" type={type} color="success" label={lable} variant="outlined" sx={{width:{width},}}/>
  )
}
