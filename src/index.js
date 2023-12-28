import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import "./style.css";
import App from './App';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <Router basename="/">
   <Provider store={Store}>
    
    <App />
  
    </Provider>
    </Router>
  </React.StrictMode>
);

