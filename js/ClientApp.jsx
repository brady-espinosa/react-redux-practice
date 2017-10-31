// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom'; // eslint-disable-line
import App from './App'; // eslint-disable-line

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
