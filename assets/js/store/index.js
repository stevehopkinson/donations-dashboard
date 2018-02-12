import {
	applyMiddleware,
	compose,
	createStore
} from 'redux';
import thunk from 'redux-thunk';

import * as api from './api';
import reducers from './Charity/reducers';

const configureStore = initialState => {
	return createStore(
		reducers, 
		initialState,
		applyMiddleware(
			thunk.withExtraArgument(api)
		)
	);
};

export default configureStore;