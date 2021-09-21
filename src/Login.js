import React,{useState} from 'react'
import './Login.css'
import {auth,provider,signInWithPopup} from './firebase';
function Login() {

    const [emailPhone, setEmailPhone] = useState("");
    const [password,setPassword] = useState("")

    const signIn = () => {
        signInWithPopup(auth,provider).then(result=> console.log(result)).catch(()=>console.log('error'))
    }

    
    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
                <h1>Facebook helps you connect and share with the people in your life.</h1>
            </div>
        <div className="logo__right">
            <div className="input__box">
                <form onSubmit={null}>
                    <input type="text" onChange={(e)=>setEmailPhone(e.target.value)} value={emailPhone}  placeholder="Email address or phone number"/>
                    <input type = "password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"/>
                    <button type="submit" value="Login"> Log In</button>
                    <a href="#">Forgotten Password?</a>
                </form>

                <button>Create New Account</button>
                
                
                </div>
                <span>Create a Page for a celebrity, band or business. </span>
        </div>
            
           
           

        </div>
    )
}

export default Login
