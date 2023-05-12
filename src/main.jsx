import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/Route.jsx'
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={route}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
