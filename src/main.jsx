import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import FormComponent from './FormComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <FormComponent/>
  </StrictMode>,
)
