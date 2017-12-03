import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './configureStore';

const store = configureStore();

const AppConfig = () => (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<AppConfig/>, document.getElementById('root'));
