import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Corrected line
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'lightbox2/dist/css/lightbox.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
