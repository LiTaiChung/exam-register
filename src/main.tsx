import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@/assets/css/index.css';

async function deferRender() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    return worker.start();
  }
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
