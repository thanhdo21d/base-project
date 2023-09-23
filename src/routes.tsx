import { createBrowserRouter } from 'react-router-dom'
import PageNotFound from './pages/404-not-found/NotFound'
export const routers = createBrowserRouter([
  {
    path: '*',
    element: <PageNotFound/>
  }
])
