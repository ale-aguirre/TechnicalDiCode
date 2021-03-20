import React from 'react'
import SidebarIconos from '../SidebarIconos/SidebarIconos'
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import './Sidebar.css'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarIconos selected Icon={HomeIcon} title="Principal"/>
            <SidebarIconos Icon={WhatshotIcon}  title="Tendencias"/>
            <SidebarIconos Icon={SubscriptionsIcon} title="Subscripciones"/>
            <hr/>
            <SidebarIconos Icon={VideoLibraryIcon} title='Biblioteca' />
            <SidebarIconos Icon={HistoryIcon} title='Historial' />
            <SidebarIconos Icon={OndemandVideoIcon} title='Tus videos' />
            <SidebarIconos Icon={WatchLaterIcon} title='Ver mas tarde' />
            <SidebarIconos Icon={ThumbUpIcon} title='Videos que me gustan' />
            <SidebarIconos Icon={ExpandMoreIcon} title='Ver mas' />
            <hr />
        </div>
    )
}

export default Sidebar
