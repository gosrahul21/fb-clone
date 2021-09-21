import React,{useEffect,useState} from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'
import db from './firebase'
import { getFirestore,query, collection, getDocs,orderBy } from 'firebase/firestore';
import {onSnapshot} from 'firebase/firestore'

import Post from './Post'
function Feed() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        const postRef = collection(db,'posts')
        const q = query(postRef,orderBy('timestamp','desc'))

        const cancelSnapshot = onSnapshot(q, (snap)=>{
            setPosts(snap.docs.map((doc) => ({id:doc.id, data:doc.data()})
        ))
    })

        return ()=> cancelSnapshot()

        

    },[])

    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>
            {
                
            posts.map(({data:{message,imageURL,timestamp,user,photoURL},id})=>(<Post 
                message={message}
                image={imageURL}
                userName={user}
                timestamp={timestamp}
                profilepic={photoURL}/>))
            }
        
            
        
            
           
           
        </div>
    )
}

export default Feed
