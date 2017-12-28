import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Toolbar from './Toolbar';
import PageBody from './PageBody';

console.log('Hello World!');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Toolbar),
        document.getElementById('root'),
    );
});

const render = () => {
    ReactDOM.render(
        React.createElement(PageBody),
        document.getElementById('page'),
    )
};

render();