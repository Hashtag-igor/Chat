import React from 'react'

import "./Chat.css"

import Messages from '../Messages/Messages';
import Input from "../Input/Input"

import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Chat() {
  return (
    <div className='chat-container'>
      <div className='chatInfo-user'>
        <span>Jane</span>
        <div className='chatIcons'>
          <VideocamIcon style={{cursor: "pointer"}}/>
          <PersonAddIcon style={{cursor: "pointer"}}/>
          <MoreHorizIcon style={{cursor: "pointer"}}/>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
