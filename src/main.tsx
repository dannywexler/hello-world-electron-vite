import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { StoreProvider } from 'easy-peasy';
import { store } from './easyPeasyStore';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
