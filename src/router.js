import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const Router = ({ children }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>{children}</BrowserRouter>
    </React.StrictMode>
  )
}
export default Router
