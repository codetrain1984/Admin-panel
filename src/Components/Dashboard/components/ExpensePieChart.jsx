import { Stack, Typography } from '@mui/material'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
]
const COLORS = ['#ff69b4', '#007fcb', '#84ebff', '#39b3ff']

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o'

  render() {
    return (
      <Stack>
        <Typography variant="h6" sx={{ textAlign: 'center' }}>
          % of Expenses Budget
        </Typography>
        <PieChart width={800} height={320} onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            cx={120}
            cy={150}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Stack>
          <Typography
            variant="body2"
            color="primary.light"
            sx={{
              textAlign: 'center',
              marginBottom: 2,
              marginTop: 2,
            }}
          >
            <Link style={{ textDecoration: 'none', color: '#39b3ff' }}>
              View Full Report
            </Link>
          </Typography>
        </Stack>
      </Stack>
    )
  }
}
