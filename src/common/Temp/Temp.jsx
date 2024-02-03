import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function Temp({regex}) {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

     const regex = (regex); 
    // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const isValidInput = regex.test(value);
    console.log(isValidInput);

    setIsValid(!isValidInput);
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField   
          error={isValid}
          color='success'
          id="outlined-error-helper-text"
          label="Email"
          helperText={isValid ? "johnsmith@example.com": ''}
          inputProps={{
            pattern: '[0-9]{10}',
          }}
          value={inputValue}
          onChange={handleInputChange}    
        />
      </div>
    </Box>
  );
}