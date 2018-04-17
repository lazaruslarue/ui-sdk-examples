// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import configureStore from './configureStore'
import registerServiceWorker from './registerServiceWorker';
import gooddata from 'gooddata'

window.gooddata = gooddata
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
