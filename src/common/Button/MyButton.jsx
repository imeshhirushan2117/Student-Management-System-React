import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function MyButton({ onClick, name, color ,width}) {

    //     <Button
    //   onClick={() => {
    //     alert('clicked');
    //   }}
    // >
    //   Click me
    // </Button>

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(color),
        backgroundColor: color,
        width:width,
        '&:hover': {
          backgroundColor: color ,
        },
      }));
    
    return (
        <Stack direction="row" spacing={2} >
        <ColorButton variant="contained"  onClick={()=> onClick()} >{name}</ColorButton>
      </Stack>
    );
}