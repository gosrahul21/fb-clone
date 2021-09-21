import React,{useState} from 'react'
import {Avatar} from '@material-ui/core'
// import ThumbsUpIcom from '@material-ui/icons/ThumbsUpIcon'
import ThumbsUpIcon from '@material-ui/icons/ThumbUpAlt'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'
import './Post.css'
function Post({profilepic,userName,message,image,timestamp}) {
    const [like , setLike] = useState("");

    const likeClick = () => {
        if(like!="") 
        setLike("")
        else 
        setLike("blue")
    }
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className= "post__avatar" src = {profilepic}/>
                <div className="post__topInfo">
                    <h3>{userName}</h3>
                    <p>{new Date(timestamp.toDate()).toUTCString()}</p>

                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src = {image} alt=""/>
            </div>

            <div className="post__options">
                <div className="post__option" onClick={likeClick}>
                    <ThumbsUpIcon style={{color:`${like}`}}  /><p>Like</p>
                </div>
                <div className="post__option">
                    <CommentIcon/> <p>Comment</p>
                </div>
                <div className="post__option">
                    <ShareIcon/><p>Share</p>
                </div>

            </div>

        </div>
    )
}

export default Post
