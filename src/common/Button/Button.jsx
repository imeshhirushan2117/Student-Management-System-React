import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function CustomButton({color,name,width,onClick}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" color={color} sx={{width:width}} onClick={onClick}>
        {name}
      </Button>
    </Stack>
  )
}
