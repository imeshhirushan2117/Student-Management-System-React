import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Button from '../../common/Button/Button';
import TextFeeld from '../../common/TextField/TextField';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Login() {
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
                <TextFeeld lable={'Email'} width={'500px'}/>
                </CardActions>

                <CardActions>
                <TextFeeld type={'password'} lable={'Password'} width={'500px'}/>
                </CardActions>

                <CardActions sx={{marginTop:'20px'}}>
                  <Button name={'Login'} color={'success'} width={'500px'}/>
                </CardActions>
              
              <Box sx={{textAlign:'center'  ,padding:'10px'}}>
              <h4>Register</h4>
              </Box>
            </Card>
        </Box>

    )
}
