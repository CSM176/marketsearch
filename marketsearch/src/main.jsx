import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainHeader from './components/header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainHeader />
    <App />
  </StrictMode>,
)
