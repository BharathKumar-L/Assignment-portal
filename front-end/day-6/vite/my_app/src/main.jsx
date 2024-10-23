import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Component1 from './components/component1.jsx'
import Component2 from './components/component2.jsx'
import Component3 from './components/component3.jsx'
import Calculator from './components/calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator />
  </StrictMode>,
)
