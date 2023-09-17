import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '@/app'
import '@/index.css'

const element = document.getElementById('root')

if (element) {
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  throw new Error('no root element found')
}
