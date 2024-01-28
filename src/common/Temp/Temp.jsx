import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { colors } from '@mui/material';

export default function Temp() {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const regex = /^\d{10}$/;

    const isValidInput = regex.test(value);

    setIsValid(isValidInput);
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
          
          color="success"
          id="outlined-error-helper-text"
          label="Number"
          helperText={isValid ? 'Number' : 'Please enter exactly 10 numbers'}
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