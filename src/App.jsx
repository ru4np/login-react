import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

export function App() {
  return (
    <RouterProvider router={router} />
  )
}
