import React from 'react'
import TextField from '@mui/material/TextField';

export default function TextFeeld({lable,width,onChange,type, value}) {
  return (
    <TextField value={value} onChange={onChange} id="outlined-basic" type={type} color="success" label={lable} variant="outlined" sx={{width:{width},}}/>
  )
}


