import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <SimpleBar style={{ maxHeight: '100vh' }} autoHide={false}>
    <App />
    </SimpleBar>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
