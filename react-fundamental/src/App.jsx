import './App.css'
import Homepage from './pages/Index'
import { GlobalContext } from './context'
import { router } from './routers'
import { RouterProvider } from 'react-router-dom'

function App() {
  const user = {
    username: "Muhammad Kamal Jaya"
  }
  return (
    <div>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
