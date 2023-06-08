import React from 'react'
import { Box, Stack } from '@mui/material'
import SidebarBox from './SidebarBox'
import useSidebar from '../../hooks/useSidebar'

export default function Sidebar() {
  const { sidebarData } = useSidebar()

  return (
    <Box
      sx={{ padding: '30px', backgroundColor: '#f7faff', position: 'fixed' }}
    >
      <img src="/Images/logo.png" alt="Logo" />
      <Stack sx={{ overflow: 'auto' }}>
        {sidebarData.map((sidebar) => (
          <SidebarBox key={sidebar.icon} {...sidebar} />
        ))}
      </Stack>
    </Box>
  )
}
