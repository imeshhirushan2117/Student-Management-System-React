import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '../../common/Button/Button';
import TextFeeld from '../../common/TextField/TextField';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import instance from '../../services/Axious'
import {AlertComponent} from '../../common/Aleart/Aleare';
import ValidateTextField from '../../common/validateTextField/validateTextFeeld'

export default function Register() {

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")


  const registerAction = () => {
    instance.post('/register', {
      name: name,
      email: email,
      password: password
    })
    .then(function (response) {
      console.log(response);
      AlertComponent('success','Success...', 'User Register Success!')
    
      clearText();
    })
    .catch(function (error) {
      AlertComponent('error','Oops...', 'Something went wrong!')
      console.log(error);
    });
  }

  const clearText = () => {
      setName("");
      setEmail("");
      setPassword("");
  }

  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: 'center' }}>
            USER REGISTER
          </Typography>
        </CardContent>

        <Box sx={{ textAlign: 'center' }}>
          <ManageAccountsIcon color="success" sx={{ fontSize: '100px' }} />
        </Box>

        <CardActions>
          {/* <TextFeeld value={name} lable={'Name'} width={'500px'} onChange={(val)=>setName(val.target.value)} /> */}
          <ValidateTextField   helperText={"John Smith"}  regex={regexName} width={'500px'} lable={'Name'} onChange={(val)=>setName(val.target.value)}/>
        </CardActions>

        <CardActions>
          {/* <TextFeeld value={email}  lable={'Email'} width={'500px'} type={email} onChange={(val)=>setEmail(val.target.value)}/> */}
          <ValidateTextField  helperText={"johnsmith@example.com"} regex={regexEmail} width={'500px'} lable={'Email'} onChange={(val)=>setEmail(val.target.value)}/>
        </CardActions>

        <CardActions>
          <TextFeeld value={password}  type={'password'} lable={'Password'} width={'500px'} onChange={(val)=>setPassword(val.target.value)}/>
        </CardActions>

        <CardActions sx={{ marginTop: '20px' }}>
          <Button name={'Register'} color={'success'} width={'500px'} onClick={registerAction}/>
        </CardActions>

        <Box sx={{ textAlign: 'center', padding: '15px' }}>
          <Link to={'/login'}>
            <h4>LogIn</h4>
          </Link>

        </Box>
      </Card>
    </Box>
  )
}
