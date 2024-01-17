import React from 'react'
import SignUpCad from '../../component/SignUpCad/SignUpCad'
import './styles.css'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate();

  const back = () => {
    navigate('/login')
  }

  return (
    <>

      <div className='signUpContainer'>
        <div className='signUpCard'>
          <SignUpCad back={() => { back() }} />
        </div>
      </div>
    </>
  )
}
