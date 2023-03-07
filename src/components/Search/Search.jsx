import React from 'react'

import "./Search.css"

export default function Search() {
  return (
    <div className='search-container'>
      <div className='search-inputBox'>
        <input type="text" placeholder='Find a User..' />
      </div>
      <div className='search-userChat'>
        <img src="https://images.pexels.com/photos/11055484/pexels-photo-11055484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='search-chatInfo'>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}
