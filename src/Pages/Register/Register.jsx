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

export default function Register() {
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
          <TextFeeld lable={'Name'} width={'500px'} />
        </CardActions>

        <CardActions>
          <TextFeeld lable={'Email'} width={'500px'} />
        </CardActions>

        <CardActions>
          <TextFeeld type={'password'} lable={'Password'} width={'500px'} />
        </CardActions>

        <CardActions sx={{ marginTop: '20px' }}>
          <Button name={'Login'} color={'success'} width={'500px'} />
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
