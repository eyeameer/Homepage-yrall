import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <NextUIProvider
        disableBaseline="true"
        attribute='class'
        defaultTheme='light'
        themes={['light', 'dark', 'modern']}

    >
    <App />
    </NextUIProvider>
  </React.StrictMode>,
)
