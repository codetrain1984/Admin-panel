import { useRoutes } from 'react-router-dom'
import './App.css'
// import Test from './Components/Test'
import routes from './routes'
import Sidebar from './Components/Sidebar/Sidebar'
import Header from './Components/Header'

function App() {
  const router = useRoutes(routes)
  return (
    <div className="App">
      {/* <Test /> */}
      <div className="sideComponent">
        <Sidebar />
      </div>

      <div className="header-dashborard">
        <Header />
        {router}
      </div>
    </div>
  )
}

export default App
