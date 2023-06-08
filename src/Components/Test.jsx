import { Box, Button, Buttson, styled } from '@mui/material'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'

export default function Test() {
  const PinkButton = styled(Button)({
    backgroundColor: 'skyblue',
    color: '#888',
    margin: 5,
    '&:hover': {
      backgroundColor: 'lightblue',
    },
    '&:disabled': {
      backgroundColor: 'gray',
      color: '#fff',
    },
  })
  return (
    <Box>
      <PinkButton>My Button</PinkButton>
    </Box>
  )
}
