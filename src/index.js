import React from 'react';
import ReactDom from 'react-dom/client';
import { App } from './components/App.js';
import './styles/global.scss';

const rootElement = document.getElementById('root');
const root = ReactDom.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

