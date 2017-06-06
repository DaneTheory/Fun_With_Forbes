import React from 'react';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './stores/';
import actions from './actions/index';

location.hash = '';
window.addEventListener("hashchange", () => {
    const hash = location.hash;

    const regexp = /#?photo\/(.*)/g;
    if (regexp.test(hash)) {
        actions.ToggleModal(hash.split('/')[1]);
    } else {
        actions.ToggleModal(undefined);
    }
});


const app = document.getElementById('app');
const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App {...store.getState()} />
        </Provider>,
        app);
};

render();
store.subscribe(render);
