import React from 'react'
import './Sidebar.css'
import SidebarBox from './SidebarBox/SidebarBox'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src="/Images/logo.png" alt="Logo" />
      <div className="sidebar-container">
        <SidebarBox />
      </div>
    </div>
  )
}
