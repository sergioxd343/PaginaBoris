import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; // Importa el Router
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
