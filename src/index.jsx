import React from 'react';
import ReactDOM from 'react-dom';
// experimental feature, so here is a polyfill (canceling can be done by xmlhttprequest without it, but i choose this ;)
import 'abortcontroller-polyfill/dist/polyfill-patch-fetch'
import * as serviceWorker from './serviceWorker';
import App from './modules/App/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
