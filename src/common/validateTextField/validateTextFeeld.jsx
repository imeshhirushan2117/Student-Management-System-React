import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function validateTextFeeld({regex,lable,type,width,onChange,helperText}) {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
  
    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      const isValidInput = regex.test(value);
      console.log(isValidInput);
      setIsValid(!isValidInput);
      onChange(event)
    }
  
    return (
      <Box
        component="form"
       
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField   
            error={isValid}
            color='success'
            id="outlined-error-helper-text"
            // helperText={isValid ? "johnsmith@example.com": ''}
            helperText={isValid ? helperText: ''}
            inputProps={{
              pattern: '[0-9]{10}',
            }}
            // value={inputValue}
            // value={`${inputValue}  ${sampleValue}`}
          
            onChange={handleInputChange}
            type={type}
            label={lable} 
            variant="outlined" sx={{width:{width},}}
          />
        </div>
      </Box>
    );
}

  