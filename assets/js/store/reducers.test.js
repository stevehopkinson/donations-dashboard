import { charity, isFetching } from './reducers';

import * as actions from './actions';

describe('Test charity reducer', () => {
	let state;
	let action;

	beforeEach(() => {
		state = undefined;
		action = {};
	});

	it('Should return null when passed empty state and no action', () => {
		state = charity(state, action);
		expect(state).toBe(null);
	});

	it('Should return action payload when passed getCharitySuccess action', () => {
		const payload = {
			name: 'foo'
		};

		action = {
			type: actions.getCharitySuccess.toString(),
			payload
		};

		state = charity(state, action);
		expect(state).toMatchObject(payload);
	});
});

describe('Test charity reducer', () => {
	let state;
	let action;

	beforeEach(() => {
		state = undefined;
		action = {};
	});

	it('Should return false when passed empty state and no action', () => {
		state = isFetching(state, action);
		expect(state).toBe(false);
	});

	it('Should return true when passed getCharityRequest action', () => {
		action = {
			type: actions.getCharityRequest.toString()
		};

		state = isFetching(state, action);
		expect(state).toBe(true);
	});

	it('Should return false when passed getCharitySuccess action', () => {
		action = {
			type: actions.getCharitySuccess.toString()
		};

		state = isFetching(state, action);
		expect(state).toBe(false);
	});

	it('Should return false when passed getCharityFailure action', () => {
		action = {
			type: actions.getCharityFailure.toString()
		};

		state = isFetching(state, action);
		expect(state).toBe(false);
	});
});