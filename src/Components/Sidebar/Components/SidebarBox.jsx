import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'

export default function SidebarBox({
  title,
  icon,
  link1,
  link2,
  link3,
  link4,
  subtitle1,
  subtitle2,
  subtitle3,
}) {
  return (
    <Accordion
      sx={{
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        marginTop: 5,
        position: 'sticky',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <div className="accordion-title">
          {icon}
          <Typography
            variant="body2"
            sx={{ color: '#B0A8B9' }}
            ml="20px"
            mr="45px"
          >
            {title}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ marginLeft: 1 }}>
        <Typography variant="body2" sx={{ color: '#B0A8B9', fontSize: 12 }}>
          <Link to={link1} style={{ textDecoration: 'none', color: 'gray' }}>
            {subtitle1}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#B0A8B9', fontSize: 12 }}
          mt="10px"
        >
          <Link to={link2} style={{ textDecoration: 'none', color: 'gray' }}>
            {subtitle2}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#B0A8B9', fontSize: 12 }}
          mt="10px"
        >
          <Link to={link3} style={{ textDecoration: 'none', color: 'gray' }}>
            {subtitle3}
          </Link>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
