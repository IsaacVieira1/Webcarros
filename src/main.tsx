import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'

import { register } from 'swiper/element/bundle'

register();
import '../node_modules/swiper/swiper-bundle.min.css';

import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
