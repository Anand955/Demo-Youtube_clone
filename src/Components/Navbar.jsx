import React from 'react'
import menu from '../assets/menu.png'
import logo from '../assets/logo.png'
import upload from '../assets/upload.png'
import more from '../assets/more.png'
import notification from '../assets/notification.png'
import jack from '../assets/jack.png'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_left">
            <img src={menu} alt="" />
            <img src={logo} alt="" />
        </div>
        <div className="nav_center">
             <div className="serach_input">
                <input type="text" placeholder='Search'/>
             </div>
        </div>
        <div className="nav_right">
            <img src={upload} alt="" />
            <img src={more} alt="" />
            <img src={notification} alt="" />
            <img src={jack} alt="" />
        </div>
      </nav>
    </>
  )
}

export default Navbar