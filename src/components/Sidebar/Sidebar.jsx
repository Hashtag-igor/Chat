import React from 'react'

import SidebarChats from '../SidebarChat/SidebarChats'
import NavbarChat from '../NavbarChat/NavbarChat'
import Search from '../Search/Search'

export default function Sidebar() {
  return (
    <div>
        <NavbarChat />
        <Search />
        <SidebarChats />
    </div>
  )
}
