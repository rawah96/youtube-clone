import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import img from './800px-YouTube_Logo_2017.svg.png'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
function Header() {
    return (
        <div className="header">
            <div className="first">
                <MenuIcon className="icon"/>
                <img className="header-logo"src={img} alt=""/>
            </div>
            <div className="second">
                <input  placeholder="Search" type="text"/>
                <SearchIcon className="input-button"/>
            </div>

            <div className="third">
                <VideoCallIcon className="icon"/>
                <AppsIcon className="icon"/>
                <NotificationsIcon className="icon"/>
                <AccountCircleIcon className="icon"/>
            </div>
        </div>
    )
}

export default Header

