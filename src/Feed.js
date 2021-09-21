import React from 'react'
import StoryReel from './StoryReel'
import './Feed.css'
import MessageSender from './MessageSender'

import Post from './Post'
function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>
            <Post 
                message="Hello guys"
                image="https://media.istockphoto.com/photos/photo-depicting-the-person-who-focuses-on-the-target-picture-id1249041775?b=1&k=20&m=1249041775&s=170667a&w=0&h=Pt6ltIPqpMrceX3FCtAEg69BjzrRJv4ZWh0n5rr3Uqs="
                userName="Minakshi"
                profilepic="https://www.whatsappimages.in/wp-content/uploads/2021/03/Cute-Girl-Images-For-Whatsapp-Dp-Pics.jpg"
            />
            <Post 
                message="Hello guys"
                image="https://i0.wp.com/www.anmolsms.com/wp-content/uploads/2020/12/43e4eebee019e145c343e2f3130a4824.jpg?ssl=1"
                userName="Minakshi"
                profilepic="https://www.whatsappimages.in/wp-content/uploads/2021/03/Cute-Girl-Images-For-Whatsapp-Dp-Pics.jpg"
            />
        
            
           
           
        </div>
    )
}

export default Feed
