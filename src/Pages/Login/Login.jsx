import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '../../common/Button/Button';
import TextFeeld from '../../common/TextField/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from 'react-router-dom';
import instance from '../../services/Axious'
import { useState } from 'react';



export default function Login() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const loginAction = () => {
        instance.post('/login', {
            email: email,
            password: password
          })
          .then(function (response) {
            // console.log(response.data.token);
            localStorage.setItem('stmToken',response.data.token)
            window.location.reload()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <Box sx={{display:'flex', justifyContent:'center',marginTop:'200px'}}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" sx={{textAlign:'center'}}>
                        USER LOGIN
                    </Typography>
                </CardContent>

                <Box sx={{textAlign:'center'}}>
                    <AccountCircleIcon color="success" sx={{fontSize:'100px'}}/>
                </Box>

                <CardActions>
                <TextFeeld lable={'Email'} width={'500px'} onChange={(val) => setEmail(val.target.value)}/>
                </CardActions>

                <CardActions>
                <TextFeeld type={'password'} lable={'Password'} width={'500px'} onChange={(val) => setPassword(val.target.value)} />
                </CardActions>

                <CardActions sx={{marginTop:'20px'}}>
                  <Button name={'Login'} color={'success'} width={'500px'} onClick={loginAction}/>
                </CardActions>
              
              <Box sx={{textAlign:'center'  ,padding:'10px'}}>
                <Link to={'/register'}>
                <h4>Register</h4>
                </Link>
              </Box>
            </Card>
        </Box>

    )
}
