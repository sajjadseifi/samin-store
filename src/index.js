import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import './fonts.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store';

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
