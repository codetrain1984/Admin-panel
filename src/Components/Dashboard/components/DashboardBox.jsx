// import DashboardCounter from './DashboardCounter'

export default function DashboardBox({ title, price, className }) {
  console.log(price)
  return (
    <div className={`dashboard-box ${className}`}>
      <h2>{title}</h2>
      <h2>
        {/* <DashboardCounter /> */}
        {price}
      </h2>
      <p>saved 25%</p>
    </div>
  )
}
