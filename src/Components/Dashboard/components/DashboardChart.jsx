import { Box, Stack, Typography } from '@mui/material'
import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: '01 Jan',
    pv: 2400,
    amt: 2400,
  },
  {
    name: '03 Jan',
    pv: 1398,
    amt: 2210,
  },
  {
    name: '05 Jan',
    pv: 9800,
    amt: 2290,
  },
  {
    name: '07 Jan',
    pv: 3908,
    amt: 2000,
  },
  {
    name: '09 Jan',
    pv: 4800,
    amt: 2181,
  },
  {
    name: '11 Jan',
    pv: 3800,
    amt: 2500,
  },
  {
    name: '13 Jan',
    pv: 5800,
    amt: 1500,
  },
  {
    name: '17 Jan',
    pv: 1200,
    amt: 1500,
  },
  {
    name: '20 Jan',
    pv: 7500,
    amt: 6500,
  },
  {
    name: '22 Jan',
    pv: 3900,
    amt: 4500,
  },
  {
    name: '23 Jan',
    pv: 6100,
    amt: 3000,
  },
]

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2'

  render() {
    return (
      <>
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box ml={5} mb={2}>
            <Typography variant="h6">AP and AR Balance</Typography>
            <Typography variant="body2" color="primary.light">
              Avg. $5,309
            </Typography>
          </Box>

          <Box display="flex">
            {/* <Accordion
              sx={{
                backgroundColor: 'transparent',
                marginRight: '10px',
                padding: '0 20px',
                outline: 'none',
              }}
            >
              <AccordionSummary
                bgcolor="transparent"
                expandIcon={<ArrowDownwardIcon sx={{ fontSize: '20px' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="body2">Monthly</Typography>
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Last year</Typography>
              </AccordionSummary>
            </Accordion> */}
          </Box>
        </Stack>

        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            {/* <Bar dataKey="uv" stackId="a" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
      </>
    )
  }
}
