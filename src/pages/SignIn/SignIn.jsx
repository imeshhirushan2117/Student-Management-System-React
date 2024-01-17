import React from 'react'
import Cad from '../../component/Cad/Cad'
import './styles.css'
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();


    const onSignIn = () => {
        localStorage.setItem("hiruBro", 'aaaaaaaaaa');
        window.location.reload();
    }

    const onSignUp = () => {
        navigate("/signUp");
    }
    return (
        <div className='signInContainer'>
            <div className='signInCard'>
                <Cad signIn={() => { onSignIn() }} signUp={() => { onSignUp() }} />
            </div>
        </div>
    )
}
