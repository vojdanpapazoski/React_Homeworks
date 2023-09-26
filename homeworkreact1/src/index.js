//! GO STARTUVA REACT
import React from 'react';

//! GO STARTUVA REACTDOM
import ReactDOM from 'react-dom/client';

//! JA STARTUVA APLIKACIJATA
import App from './App';

//! KREIRA KOREN ZA REACTDOM I JA RENDERIRA APLIKACIJATA
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

