import { Box, Typography } from '@mui/material'
import DashboardCounter from './DashboardCounter'

export default function DashboardBox({ title, price, className }) {
  return (
    <Box className={`dashboard-box ${className}`}>
      <Typography variant="h5" style={{ marginBottom: 6 }}>
        {title}
      </Typography>
      <DashboardCounter price={+price} />
      <Typography variant="body2" sx={{ marginTop: 4 }}>
        saved 25%
      </Typography>
    </Box>
  )
}
