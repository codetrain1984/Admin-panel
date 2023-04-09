import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function SidebarBox({
  title,
  icon,
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
      <AccordionDetails sx={{ marginLeft: 5 }}>
        <Typography variant="body2" sx={{ color: '#B0A8B9', fontSize: 12 }}>
          {subtitle1}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#B0A8B9', fontSize: 12 }}
          mt="10px"
        >
          {subtitle2}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
