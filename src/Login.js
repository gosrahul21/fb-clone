import React,{useState,useEffect} from 'react'
import './Login.css'
import {auth,provider,signInWithPopup} from './firebase';
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'
import { getIdToken, signInWithEmailAndPassword,signInWithPhoneNumber , createUserWithEmailAndPassword, RecaptchaVerifier } from '@firebase/auth';
function Login() {

    const [emailPhone, setEmailPhone] = useState("");
    const [password,setPassword] = useState("")
    const [state,dispatchRedux] = useStateValue();

    useEffect(()=>{
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            size: 'invisible',
            callback: (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              console.log('captha solved');
              console.log(signInFormHandler)
              signInFormHandler();
            }
          }, auth);
    },[]);

    const signIn = (e) => {
        e.preventDefault();
        
        signInWithPopup(auth,provider)
        .then(result=> {
            if(!result) return;
            console.log(result);
            // const {user} = result
            // getIdToken(user).then((token)=>{
            //     localStorage.setItem('accessToken',token)
            // }).catch((err)=>{
            //     console.log("token generation failed")
            // })


            
            // dispatchRedux({
            //     type:actionTypes.SET_USER,
            //     user
            // });
        })
        .catch((err)=>console.log(err))
    }

    function signInFormHandler(e){
        e.preventDefault();
        
        // signInWithEmailAndPassword(auth,emailPhone,password).then((result)=>{
        //     console.log(result);
        // }).catch((err)=>console.log(err))
        // console.log("signed in with phoneno. ");
        // const applicationVerifier = new RecaptchaVerifier('recaptcha');
        const number = '+917004572140';
        const applicationVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth,number,applicationVerifier).then((result)=>{
            const code = prompt('enter otp');
            if(code === null)
                return;
            result.confirm(code).then((res)=>console.log(res.user)).catch((err)=>{
                console.log(err);
            })
        }).catch((err)=>console.log(err));
    }

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"/>
                <h1>Facebook helps you connect and share with the people in your life.</h1>
            </div>
        <div className="logo__right">
            <div className="input__box">
                <form >
                    <input type="text" onChange={(e)=>setEmailPhone(e.target.value)} value={emailPhone}  placeholder="Email address or phone number"/>
                    <input type = "password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="password"/>
                    <label></label>
                    <button  id='sign-in-button' onClick={signInFormHandler} type="submit"  value="Login"> Log In</button>
                    <button  onClick = {signIn} value="Login"> Sign In with Google</button>
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
