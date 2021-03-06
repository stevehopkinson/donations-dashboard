import { combineReducers } from 'redux';

import * as actions from './actions';

export const charity = (state = null, action) => {
	switch (action.type) {
		case actions.getCharitySuccess.toString():
			return action.payload;

		default:
			return state;
	}
}

export const hasErrored = (state = false, action) => {
	switch (action.type) {
		case actions.getCharitySuccess.toString():
			return false;

		case actions.getCharityFailure.toString():
			return true;

		default:
			return state;
	}
}

export const isFetching = (state = false, action) => {
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

export const selectedCharity = (state = null, action) => {
	switch (action.type) {
		case actions.setSelectedCharity.toString():
			return action.payload;

		default:
			return state
	}
}

const reducers = combineReducers({
	charity,
	hasErrored,
	isFetching,
	selectedCharity
});

export default reducers;