import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AppProvider } from './contexts/app.contexts.tsx'
import { HelmetProvider } from 'react-helmet-async'
import ErrorBoundary from './components/Error/ErrorBoundary.tsx'
import { Provider } from 'react-redux'
import { store } from './store/root/store.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
      <AppProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
)
