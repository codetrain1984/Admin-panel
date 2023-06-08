// import DashboardCounter from './DashboardCounter'

import DashboardCounter from './DashboardCounter'

export default function DashboardBox({ title, price, className }) {
  return (
    <div className={`dashboard-box ${className}`}>
      <h2 style={{ marginBottom: 6 }}>{title}</h2>
      <DashboardCounter price={+price} />
      <p style={{ marginTop: 4 }}>saved 25%</p>
    </div>
  )
}
