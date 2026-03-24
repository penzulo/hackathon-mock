import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import ReactDOM from "react-dom/client"
import React from "react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
