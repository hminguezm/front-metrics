import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './styles';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
