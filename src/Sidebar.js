import React from 'react'
import './Sidebar.css'
import './SidebarRow'
import SidebarRow from './SidebarRow'
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import {useStateValue} from './StateProvider'
function Sidebar() {                                                                                                                                                                            
    const [{user},dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title= {user.displayName}   src={user.photoURL}/>
            <SidebarRow title = "Pages" Icon={EmojiFlagsIcon} />
            
            <SidebarRow 
            title = "Friends" 
            Icon={PeopleIcon}
            />

            <SidebarRow 
            title = "Messenger" 
            Icon={ChatIcon} 
            />
            <SidebarRow 
            title = "Group" 
            Icon={GroupIcon} 
            />
            <SidebarRow 
            title = "Marketplace" 
            Icon={HomeIcon} 
            />
            
           
            
            

            
        </div>
    )
}

export default Sidebar
