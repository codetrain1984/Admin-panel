import React from 'react'
import './Sidebar.css'
import SidebarBox from './Components/SidebarBox'
import useSidebar from './useSidebar'

export default function Sidebar() {
  const { sidebarData } = useSidebar()
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src="/Images/logo.png" alt="Logo" />
      <div className="sidebar-container">
        {sidebarData.map((sidebar) => (
          <SidebarBox key={sidebar.icon} {...sidebar} />
        ))}
      </div>
    </div>
  )
}
