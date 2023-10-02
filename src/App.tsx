import './App.css'
import { RouterProvider } from 'react-router-dom'
import { routers } from './routes'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <RouterProvider router={routers}/>
      <ToastContainer />
    </>
  )
}

export default App
