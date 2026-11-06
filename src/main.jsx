import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Coloquei o BrowserRouter aqui, em volta do App, para que todas as páginas
// consigam usar rotas, links e os hooks de navegação (useNavigate, useLocation...).
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)