import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store';
import { App } from './components/App';

// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();

render(
    <Provider configureStore={configureStore}>
        <App />
    </Provider>,
    document.getElementById('app')
);