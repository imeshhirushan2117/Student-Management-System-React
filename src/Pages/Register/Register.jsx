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
import Aleare from '../../common/Aleart/Aleare';
import Swal from 'sweetalert2';

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
      // <Aleare icon='success' title='success...' text='User Register Success!'/>

      Swal.fire({
        icon: "success",
        title: "Success...",
        text: "User Register Success!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      clear()
    })
    .catch(function (error) {
      console.log(error);
      <Aleare icon='error' title='Oops...' text='Something went wrong!'/>
    });
  }

    
  const clear = () => {
    name(""),
    email(""),
    password("")
}
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
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
          <TextFeeld lable={'Name'} width={'500px'} onChange={(val)=>setName(val.target.value)} />
        </CardActions>

        <CardActions>
          <TextFeeld lable={'Email'} width={'500px'} onChange={(val)=>setEmail(val.target.value)}/>
        </CardActions>

        <CardActions>
          <TextFeeld type={'password'} lable={'Password'} width={'500px'} onChange={(val)=>setPassword(val.target.value)}/>
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
