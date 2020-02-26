import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

// redux devtools
import { composeWithDevTools } from  'redux-devtools-extension';

// redux store stuff
import reducers from './store/reducers';

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)));
// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
        <Routes />
    </Provider>, 

document.getElementById('root'));
