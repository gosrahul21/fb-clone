import React,{useEffect,useState} from 'react'
import Story from './Story'
import './StoryReel.css'
import db from './firebase'
import {onSnapshot,collection,query,orderBy,limit} from 'firebase/firestore'
function StoryReel() {
    const [reel,setReel] = useState([])

    useEffect(() => {
        const storyRef = collection(db,'story')
        const q = query(storyRef,orderBy('timestamp','desc'),limit(5))
        const cleanUp = onSnapshot(q,(snap)=>{
            setReel(snap.docs.map((doc)=>({
                id:doc.id,data:doc.data()
            })))
        })
        return () => {
            cleanUp()
        }
    }, [])

    return (
        <div className="storyReel">
            {/* story */}
            {
                reel.map(({data})=>{
                   return <Story
                    image={data.reel}
                    profileSrc={data.photoURL}
                />
                })
            }
           
  
           
            {/* story */}
            {/* story */}
        </div>
    )
}

export default StoryReel

