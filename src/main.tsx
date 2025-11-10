import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import { Provider as ReduxProvider } from "react-redux"
import { store } from './redux/store'
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </ReduxProvider>
  </StrictMode>,
)
