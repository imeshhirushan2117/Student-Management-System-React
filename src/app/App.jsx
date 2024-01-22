import LoginPage from '../Pages/Login/Login'
import RegisterPage from '../Pages/Register/Register'
import DashBoardPage from '../components/DashBoard/DashBoard'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useEffect, useState} from 'react'
function App() {

  const [login, setLogin] = useState(false)

  useEffect(()=>{
      const key = localStorage.getItem('stmToken')
      
      if(key !== null){
        setLogin(true)
      }else{
        setLogin(false)
      }
  },[])


  return (
    <>
      {
        login ?
          <DashBoardPage />
          :
          <Routes>
            <Route path='*' element={<Navigate to={'/login'} />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/register'} element={<RegisterPage />} />
          </Routes>
      }
    </>
  )
}
export default App
