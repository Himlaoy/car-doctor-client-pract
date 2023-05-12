import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Route/Route.jsx'
import { AuthContext } from './AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <AuthContext.Provider>
        <RouterProvider router={route}></RouterProvider>
      </AuthContext.Provider>
    </React.StrictMode>,
  </div>
)
