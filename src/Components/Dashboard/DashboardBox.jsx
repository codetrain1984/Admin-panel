import React from 'react'
import './DashboardBox.css'

export default function DashboardBox({ title, price }) {
  return (
    <div className="dashboard-box">
      {/* <div className="dashboard-container"> */}
      <h4>{title}</h4>
      <h2>${price}</h2>
      <p>saved 25%</p>
      {/* </div> */}
    </div>
  )
}
