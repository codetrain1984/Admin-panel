import { useRoutes } from 'react-router-dom'

import './App.css'
import routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header/Header'
import Home from './pages/Home/Home'

function App() {
  const router = useRoutes(routes)
  return <div className="App">{router}</div>
}

export default App
