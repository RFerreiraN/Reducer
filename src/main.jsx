import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ListaTareas } from './Components/ListaTareas'
import { FormComponent } from './Components/FormComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormComponent/>
  </StrictMode>,
)
