import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CounterPage } from './pages/Counter'
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/counter',
    element: <CounterPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
