import React from 'react'
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar'
import Widgets from './Widgets'
import Login from './Login'
import './App.css'
import {useStateValue} from './StateProvider'
function App() {

  const [{user},dispatch] = useStateValue();
  
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
