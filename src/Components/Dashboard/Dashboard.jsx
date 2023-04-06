import './components/Dashboard.css'
import DashboardBox from './components/DashboardBox'
import useDashboard from './hooks/useDashboard'

export default function Dashboard() {
  const { dashboardData } = useDashboard()

  return (
    <div className="dashboard">
      <div className="dashboard-info">
        {dashboardData.map((item) => (
          <DashboardBox key={item.className} {...item} />
        ))}
      </div>
    </div>
  )
}
