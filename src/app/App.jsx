import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from '../pages/DashBoard/DashBoard';
import { Route, Routes} from 'react-router-dom';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='signUp' element={<SignUp />}/>
        <Route path='dashboard' element={<DashBoard />}/>
    
      </Routes>
    </>
  )
}

export default App
