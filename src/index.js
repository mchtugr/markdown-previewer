import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';



import App from './components/App';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, composeEnhancers(applyMiddleware())
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.querySelector('#root')
);
