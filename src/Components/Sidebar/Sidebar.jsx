import React from 'react'
import './Sidebar.css'
import SidebarBox from './Components/SidebarBox'
import useSidebar from './useSidebar'
import {
  Accordion,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'

export default function Sidebar() {
  const { sidebarData } = useSidebar()
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
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
