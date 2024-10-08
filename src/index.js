import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router'
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <App />
  </Router>,
)
