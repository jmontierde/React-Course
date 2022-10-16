import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


// const funFact = (
//   <div>
//     <img src={'./reactLogo.png'} alt="React-Logo"></img>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>

//     </ul>
//   </div>
// )




root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




