import React from 'react'
import './Header.css'
import Badge from '@mui/material/Badge'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded'

export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-search">
          <SearchIcon className="search-logo" />
          <input type="text" placeholder="Search ..." />
        </div>
        <div className="header-notification">
          <div className="notif-info">
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon
                className="notif-icon"
                sx={{ fontSize: 30, color: 'gray' }}
              />
            </Badge>
            <Badge badgeContent={4} color="secondary">
              <ChatBubbleOutlineRoundedIcon
                className="notif-icon"
                sx={{ fontSize: 30, color: 'gray' }}
              />
            </Badge>
          </div>
          <img
            className="personnel-img"
            src="/Images/Tim-Powell.jpg"
            alt="Personnel"
          />
        </div>
      </div>
    </div>
  )
}
