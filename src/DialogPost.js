import React,{useState} from 'react'
import { Avatar,Button,Dialog,Icon,IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import LocalIcon from '@material-ui/icons/LocalOffer'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import MicRoundedIcon from '@material-ui/icons/MicRounded'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import db from './firebase'
import { collection ,addDoc} from '@firebase/firestore';

import './DialogPost.css'
function DialogPost({open,setOpen,photoURL,displayName,message, setMessage,image,setImage}) {

    const onSubmit = (e)=>{
        setOpen(false)
        const postRef = collection(db,'posts');
        console.log(image)
        addDoc(postRef,{
            message,
            user:displayName,
            photoURL,
            timestamp:new Date(),
            imageURL:image

            
        })
        
    }
    const  getBase64 = file => {
        return new Promise(resolve => {
          let fileInfo;
          let baseURL = "";
          // Make new FileReader
          let reader = new FileReader();
    
          // Convert the file to base64 text
          reader.readAsDataURL(file);
    
          // on reader load somthing...
          reader.onload = () => {
            // Make a fileInfo Object
            console.log("Called", reader);
            baseURL = reader.result;
            console.log(baseURL);
            resolve(baseURL);
          };
          console.log(fileInfo);
        });
      };
    
    const imageSetting = (e)=>{
        const file = e.target.files[0]
        getBase64(file).then((result)=>{
            setImage(result)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <div className="dialog__post">
            <div className="header">
                <h3>Create Post</h3>
                <IconButton onClick={()=>setOpen(false)}>
                    <CloseIcon/>
                </IconButton>
            </div>
            <div className="dialog__post__body">
                <div className="dialog__body__header">
                     <Avatar src={photoURL}/>
                     <div className="name">
                         <h4>{displayName}</h4>
                         <Button>
                             Public
                         </Button>
                     </div>
                </div>
                <div className="dialog__input__body">
                    <textarea type="text"  onChange ={(e)=> setMessage(e.target.value)} value = {message} placeholder="Whats on your Mind"/>
                </div>
                <div className="add_to_your_post">
                    <h3>Add to Your Post</h3>
                    <IconButton fontSize="small">
                        <label for="file">
                        <PhotoLibraryIcon style={{color:"green"}}/>
                        <input onChange={imageSetting} id ="file" type="file" style={{display:"none"}}/>
                        </label>
                    </IconButton>
                    <IconButton>
                        <LocalIcon style={{color:"blue"}}/>
                    </IconButton>
                    <IconButton>
                        <MoodIcon style={{color:"orange"}}/>
                    </IconButton>

                    <IconButton>
                        <LocationOnIcon/>
                    </IconButton>
                    <IconButton>
                    <MicRoundedIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreHorizIcon/>
                    </IconButton>
                    

                </div>

                <button onClick={onSubmit}>Post</button>
            </div>
            
            </div>
            
        </Dialog>
    )
}

export default DialogPost
