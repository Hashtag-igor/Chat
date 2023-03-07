import React from 'react'

import "./NavbarChat.css"

export default function NavbarChat() {
  return (
    <div className='navbarChat-container'>
      <div className='navbarChat-user'>
        <img src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John Norton</span>
        <button>Logout</button>
      </div>
    </div>
  )
}
