import { combineReducers } from 'redux';

import * as actions from './actions';

const charity = (state = null, action) => {
	switch (action.type) {
		case actions.getCharitySuccess.toString():
			return action.payload;

		default:
			return state;
	}
}

const isFetching = (state = false, action) => {
	switch (action.type) {
		case actions.getCharityRequest.toString():
			return true;

		case actions.getCharitySuccess.toString():
		case actions.getCharityFailure.toString():
			return false;

		default:
			return state;
	}
}

const reducers = combineReducers({
	charity,
	isFetching
});

export default reducers;