import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './app/store'         // 1.- importamos "store" para que este global en toda la aplicación
import { Provider } from 'react-redux'  // 2.- importamos el "provider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
