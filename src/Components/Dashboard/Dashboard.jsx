import { Box, Grid, Stack } from '@mui/material'
import './components/Dashboard.css'
import DashboardBox from './components/DashboardBox'
import DashboardChart from './components/DashboardChart'
import IncomePieChart from './components/IncomePieChart'
import ExpensePieChart from './components/ExpensePieChart'
import useDashboard from './hooks/useDashboard'
import EarningChart from './components/EarningChart'
import ServicesChart from './components/ServicesChart'

export default function Dashboard() {
  const { dashboardData } = useDashboard()

  return (
    <div className="dashboard">
      <div className="dashboard-info">
        {dashboardData.map((item) => (
          <DashboardBox key={item.className} {...item} />
        ))}
      </div>
      <Stack mx={5}>
        <Box>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={6}>
              <Box bgcolor="#f7faff" p={2} height="90%">
                <DashboardChart />
              </Box>
            </Grid>

            <Grid item xs={3} sx={{ height: '500px' }}>
              <Box bgcolor="#f7faff" p={2}>
                <IncomePieChart />
              </Box>
            </Grid>
            <Grid item xs={3} sx={{ height: '500px' }}>
              <Box bgcolor="#f7faff" p={2}>
                <ExpensePieChart />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={6}>
              <Box bgcolor="#f7faff" p={2} height="97%">
                <EarningChart />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box bgcolor="#f7faff" p={2} height="97%">
                <ServicesChart />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </div>
  )
}
