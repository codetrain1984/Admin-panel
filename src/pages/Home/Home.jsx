import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Dashboard from '../../Components/Dashboard/Dashboard'

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="header-dashborard">
        <Header />
        <Dashboard />
      </div>
    </main>
  )
}
