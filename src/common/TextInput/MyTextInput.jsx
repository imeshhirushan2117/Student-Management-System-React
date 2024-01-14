import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function MyTextInput({ color, label , type}) {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: color,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#E0E3E7',
        borderRadius: '2px',
      },
      '&:hover fieldset': {
        borderColor: 'black',

      },
      '&.Mui-focused fieldset': {
        borderColor: color,
      },
    },

    ...(type === 'password' && {
      '& input': {
      },
    }),

  });



  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sx: '1fr 1fr' },
        gap: 2,
      }}
    >
      <CssTextField label={label} id="custom-css-outlined-input" type={type}/>

    </Box>
  );
}