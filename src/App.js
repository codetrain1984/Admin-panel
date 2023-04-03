import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <div className="header-dashborard">
          <Header />
          <Dashboard />
        </div>
      </main>
    </div>
  )
}

export default App
