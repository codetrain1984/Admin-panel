import DashboardCounter from './DashboardCounter'

export default function DashboardBox({ title, price, className }) {
  return (
    <div className={`dashboard-box ${className}`}>
      <h4>{title}</h4>
      <h2>
        {/* <DashboardCounter price={price} /> */}
        {price}
      </h2>
      <p>saved 25%</p>
    </div>
  )
}
