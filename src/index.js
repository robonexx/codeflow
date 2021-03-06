import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GithubProvider} from './context'
/* import { Auth0Provider } from '@auth0/auth0-react' */

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
    <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
