import React from 'react'
import './Dashboard.css'
import Dashboardbox from './DashboardBox'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-info">
        {/* <Dashboardbox title="Total Income" price="579,000" id="one" />
        <Dashboardbox title="Total Expences" price="79,000" id="two" />
        <Dashboardbox title="Cash on Hand" price="92,000" id="three" />
        <Dashboardbox title="Net Profit Margin" price="579,000" id="four" /> */}

        <div className="dashboard-box one">
          <h4>Total Income</h4>
          <h2>$579,000</h2>
          <p>saved 25%</p>
        </div>
        <div className="dashboard-box two">
          <h4>Total Income</h4>
          <h2>$579,000</h2>
          <p>saved 25%</p>
        </div>
        <div className="dashboard-box three">
          <h4>Total Income</h4>
          <h2>$579,000</h2>
          <p>saved 25%</p>
        </div>
        <div className="dashboard-box four">
          <h4>Total Income</h4>
          <h2>$579,000</h2>
          <p>saved 25%</p>
        </div>
      </div>
    </div>
  )
}
