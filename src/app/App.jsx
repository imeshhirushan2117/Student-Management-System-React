import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import DashBoard from '../pages/DashBoard/DashBoard';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  const genKey = localStorage.getItem('hiruBro');
  console.log(genKey);

  return (
    <>

      {
        genKey === null ? <>
          <Routes>
            <Route path={"*"} element={<Navigate to={'/login'} />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>

        </> : <>
        <DashBoard />
        </>
      }

      {/* <Routes>
        <Route path={"*"} element={<Navigate to={'/login'} />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />

      </Routes> */}
    </>
  )
}

export default App
