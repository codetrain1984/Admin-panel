import { Box, Grid, Stack, styled } from '@mui/material'
import './components/Dashboard.css'
import DashboardBox from './components/DashboardBox'
import DashboardChart from './components/DashboardChart'
import IncomePieChart from './components/IncomePieChart'
import ExpensePieChart from './components/ExpensePieChart'
import useDashboard from '../../hooks/useDashboard'
import EarningChart from './components/EarningChart'
import ServicesChart from './components/ServicesChart'
import DisputedOverdueChart from './components/DisputedOverdueChart'
import DisputedInvoicesChart from './components/DisputedInvoicesChart'
import InvoicesChart from './components/InvoicesChart'

export default function Dashboard() {
  const { dashboardData } = useDashboard()

  const DashbBox = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: '20px',
    backgroundColor: 'inherit',
  })
  return (
    <Box
      sx={{
        flex: 4,
        width: '100%',
        backgroundColor: '#fff',
        height: '100vh',
        borderRadius: '7px',
      }}
    >
      <DashbBox>
        {dashboardData.map((item) => (
          <DashboardBox key={item.className} {...item} />
        ))}
      </DashbBox>
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
        <Box>
          <Grid container my={4} rowSpacing={2} columnSpacing={2}>
            <Grid item xs={3}>
              <Box bgcolor="#f7faff" p={2} height="90%">
                <DisputedOverdueChart />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box bgcolor="#f7faff" p={2} height="90%">
                <DisputedInvoicesChart />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box bgcolor="#f7faff" p={2} height="90%">
                <InvoicesChart />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  )
}
