
import React,{useState} from 'react'
import  './MessageSender.css'
import { Avatar,Dialog,IconButton } from '@material-ui/core'
import VideoCameraFrontIcon from '@material-ui/icons/VideoCall';
import VideoCamIcon from '@material-ui/icons/Videocam';
import DialogPost  from './DialogPost';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import {useStateValue} from './StateProvider'
import base64 from './base64';
import db from './firebase'
import { collection,addDoc } from '@firebase/firestore';
import { async } from '@firebase/util';

function MessageSender() {
    const [showDialog,setShowDialog] = useState(false)
    const [{user:{displayName,photoURL}},dispatch] = useStateValue();
    const [reel,setReel] = useState("")
    const [message, setMessage] = useState("");
    const [image,setImage] = useState("")
    

    const  imageSetting = async (e) => {
        const file = e.target.files[0]
        const result = await base64(file);
        setReel(result)
        //save image 
        const storyRef = collection(db,'story')
        addDoc(storyRef,{
            photoURL,
            reel:result,
            timestamp:new Date()
        }).then((success)=>{
            console.log("image added")
        }).catch((err)=>console.log("failed to upload image"))

    }
    return (
        <div className="messageSender">
            <div className="messageSender__row">

                <Avatar src={photoURL}/>
                <button onClick={()=>setShowDialog(true)} 
                    className="messageSender__input"
                    placeholder = "Whats on your mind"
                    >What's on your mind, {displayName}</button>
                

               
            </div>
            <div className="messageSender__row2">
                <div className="options">
                    <VideoCamIcon fontSize="large" style={{color:"#DC143C"}}/><h4>Live Video</h4>
                </div>
                <label className="options" for="imageInput">
                    <PhotoLibraryIcon fontSize="large" style={{color:"green"}}/> <h4>Photo/Video</h4>
                    <input onChange={imageSetting} type="file" id="imageInput" style={{display:"none"}}/>
                </label>
                <div className="options">
                    <MoodIcon fontSize="large" style={{color:"orange"}}/><h4>Feeling/Activity</h4>
                </div>
            </div>
            <DialogPost open={showDialog} setOpen = {setShowDialog} photoURL={photoURL} message={message} setImage={setImage}
            setMessage={setMessage} image={image} displayName={displayName} />
        </div>
    )
}

export default MessageSender
