import React from 'react'

import "./Message.css"

export default function Message() {
  return (
    <div className='message-container owner'>
      <div className='messageInfo'>
        <img src="https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>Just now</span>
      </div>
      <div className='messageInfo-content'>
        <p>hello</p>
        <img src="https://images.pexels.com/photos/11055484/pexels-photo-11055484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

//eu
//https://images.pexels.com/photos/10909386/pexels-photo-10909386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1

//user
//https://images.pexels.com/photos/11055484/pexels-photo-11055484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
