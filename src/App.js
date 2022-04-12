import React,{useEffect} from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Login from './Login'
import './App.css'
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
import {signInWithCustomToken,get, onAuthStateChanged} from 'firebase/auth'
import {actionTypes} from './reducer'


function App() {
  const [{user},dispatch] = useStateValue();
  useEffect(() => {
    // const token = localStorage.getItem('accessToken')
    
    // if(token){
    //   console.log(token)
    //   signInWithCustomToken(auth,token).then((result)=>{
    //       dispatch({
    //         type:actionTypes.SET_USER,
    //         user:result.user
    //       })
    //       // localStorage.setItem('accessToken',result._tokenResponse.idToken)
    //   }).catch((err)=>{
    //     console.log(err)
    //     // localStorage.removeItem('accessToken')
    //   })
    // }
    // return () => {
      
    // }

    onAuthStateChanged(auth,(result)=>{
      if(!result) return dispatch({
        type:actionTypes.LOGOUT_USER
      });
      const { displayName = null, phoneNumber=null, email=null, emailVerified = null, photoURL='',accessToken } = result;
      console.log(accessToken)
      

      dispatch({
        type:actionTypes.SET_USER,
        user:{ displayName, phoneNumber, email, emailVerified, photoURL }
    })
    })


  }, [])


  return <div className="app">
      {/* header */}
      {user?<>
        <Header/>
      {/* App body */}
      <div className="app__body">
             {/* sidebar */}
            <Sidebar/>
      {/* feed */}
            <Feed/>
            <Widgets/>
            </div>
      </>:<Login/>}
     
     </div>
 
}

export default App;
