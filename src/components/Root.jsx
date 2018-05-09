import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../store';
import Demo from './Demo';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Demo />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
