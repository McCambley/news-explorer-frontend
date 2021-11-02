import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/style/GlobalStyles';
import FontStyles from './components/style/FontStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
