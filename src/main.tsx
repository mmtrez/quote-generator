import React from 'react';
import ReactDOM from 'react-dom/client';
import {ErrorBoundary} from 'react-error-boundary';
import {BrowserRouter} from 'react-router-dom';
import Fallback from './components/Fallback.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={Fallback}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
