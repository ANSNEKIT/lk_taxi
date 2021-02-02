import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

import './index.css';

import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <ScopedCssBaseline>
        <App />
      </ScopedCssBaseline>
    </BrowserRouter>
  </React.StrictMode>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
