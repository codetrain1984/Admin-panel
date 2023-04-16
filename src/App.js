import { useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'

function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      <main>
        <Sidebar />
        <div className="header-dashborard">
          <Header />
          {router}
        </div>
      </main>
    </div>
  )
}

export default App
