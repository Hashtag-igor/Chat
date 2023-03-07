import React from 'react'

import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import "./Input.css"

export default function Input() {
  return (
    <div className='input-container'>
      <input type="text" placeholder='Type something..'/>
      <div className='input-send'>
        <AttachFileIcon style={{cursor: "pointer"}}/>
        <input type="file" style={{display: "none"}} id="file"/>
        <label htmlFor="file">
            <AddPhotoAlternateIcon style={{fontSize: "26px", cursor: "pointer"}}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
