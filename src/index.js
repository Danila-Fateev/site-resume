import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './fonts/Righteous-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="site-resume">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
