import React from 'react'
import Chat from '../components/Chat/Chat'
import Sidebar from '../components/Sidebar/Sidebar'

//import Login from '../components/Form/Login'
//import Register from '../components/Form/Register'
import "./Home.css"

export default function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='chat'>
            <Chat />
          </div>
        </div>
    </div>
  )
}
