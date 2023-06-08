import React from 'react'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'
import { Avatar, Box, InputBase, Stack, TextField, styled } from '@mui/material'

export default function Header() {
  const SearchBox = styled(Box)({
    flex: '4',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' space-between',
    borderRadius: '7px',
    padding: '20px',
    marginTop: '30px',
    marginBottom: '20px',
  })
  return (
    <SearchBox>
      <Stack
        direction="row"
        sx={{
          width: '350px',
          backgroundColor: '#f7faff',
          borderRadius: '50px',
          padding: '7px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SearchIcon
          sx={{ marginLeft: '10px', marginRight: '10px', color: 'GrayText' }}
          color="#B0A8B9"
        />
        <InputBase
          sx={{ fontSize: '14px' }}
          type="text"
          required
          placeholder="Search ..."
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        mr={2}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Badge
          badgeContent={3}
          color="primary"
          sx={{ backgroundColor: 'transparent' }}
        >
          <NotificationsNoneOutlinedIcon
            sx={{
              fontSize: 30,
              color: '#B0A8B9',
              backgroundColor: 'transparent',
            }}
          />
        </Badge>
        <Badge
          badgeContent={6}
          color="otherColor"
          sx={{ backgroundColor: 'transparent' }}
        >
          <ChatBubbleOutlineRoundedIcon
            sx={{
              fontSize: 25,
              color: '#B0A8B9',
              backgroundColor: 'transparent',
            }}
          />
        </Badge>
        <Avatar
          alt="Personnel"
          src="/Images/Tim-Powell.jpg"
          sx={{ width: '50px', height: '50px' }}
        />
      </Stack>
    </SearchBox>
  )
}
