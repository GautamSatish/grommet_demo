import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'grommet/scss/vanilla/index.scss';

import store from './store';
import Demo from './components/Demo';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Demo />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
