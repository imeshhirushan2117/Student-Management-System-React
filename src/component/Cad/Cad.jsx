import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import MyButton from '../../common/Button/MyButton';
import MyTextInput from '../../common/TextInput/MyTextInput';








const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 , textAlign:'center', marginBottom:"20px"}} color="black" gutterBottom>
        Well Come to Sign In Student Management System !
      </Typography>

      <Box sx={{display:'flex',justifyContent:'center' ,marginBottom:"20px"}}>
        <AccountCircleIcon sx={{fontSize:'100px',color:'#27ae60' , cursor:"pointer"}} />
      </Box>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' },
          flexDirection:'column',
          display:'flex',
          gap:'10px'
        }}
        noValidate
        autoComplete="off"
      >
        
        <MyTextInput label="Email" color="#27AE60"/>
        <MyTextInput label="Password" color="#27AE60" type='password'/>
        <MyButton name="Sign In" color='#27ae60' width='100%'/>

      </Box>

      <Typography variant="body2">

      </Typography>
    </CardContent>
    <CardActions>
     
    </CardActions>
  </React.Fragment>
);

export default function Cad() {
  return (
    <div>
      <Box sx={{ minWidth: 275,marginTop:'90px',}}>
        <Card sx={{ }} variant="outlined">{card}</Card>
      </Box>
    </div>
  )
}
