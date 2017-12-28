import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Toolbar from './Toolbar';

console.log('Hello World!');

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
		React.createElement(Toolbar),
		document.getElementById('mount')
	);
});

