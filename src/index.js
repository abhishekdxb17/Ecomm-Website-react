import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));


