import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';

const store = configureStore();

ReactDOM.render(
	<div store={store} />,
	document.getElementById('root')
);