import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/mar4ella89.github.io">
      <App />
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
