import React from 'react';//cor foundation libraray hai jo saare referene lena ka kam karti hai
import ReactDOM from 'react-dom/client';//react ka he implementation hai web pay
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
//react apna kud ka virtual dom bana ta hai uska andar method hai create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

