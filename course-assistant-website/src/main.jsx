import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Login from './components/login/Login.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Login /> */}
      <App/> 
    </BrowserRouter>
  </React.StrictMode>
);
