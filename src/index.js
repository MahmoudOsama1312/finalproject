import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import App from './App';
import './index.scss';
import MediaContextProvider from './components/Context/MediaStore.js'
import AuthContextProvider from './components/Context/AuthStore'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
       <MediaContextProvider>
      <App />
    </MediaContextProvider>
    </AuthContextProvider>
   

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
