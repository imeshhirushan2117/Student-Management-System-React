import React from 'react'
import Cad from '../../component/Cad/Cad'
import './styles.css'

export default function SignIn() {

    const  onSignIn = () => {
        const url = '/dashboard';
        window.location.href = url;
        console.log('signIn');
    } 

    const  onSignUp = () => {
        const url = '/signUp';
        window.location.href = url;
    } 
    return (
        <div className='signInContainer'>
            <div className='signInCard'>
                <Cad signIn={() => {onSignIn()}}signUp={() => {onSignUp()}} />
            </div>
        </div>
    )
}
