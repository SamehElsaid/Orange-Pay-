import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    <HashRouter>
      <App />
    </HashRouter>
</I18nextProvider>
  </React.StrictMode>
);

reportWebVitals();
