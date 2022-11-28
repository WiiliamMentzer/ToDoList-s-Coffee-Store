import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "98.css";
import App from './components/App';
import reportWebVitals from './components/reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
