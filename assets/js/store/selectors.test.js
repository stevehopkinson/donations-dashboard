import { getCharity, getIsFetching } from './selectors';

describe('Test getCharity selector', () => {
	let state = {
		charity: 'foo'
	};

	it('Should return state.charity', () => {
		expect(getCharity(state)).toBe(state.charity);
	});
});

describe('Test isFetching selector', () => {
	let state = {
		isFetching: false
	};

	it('Should return state.isFEtching', () => {
		expect(getIsFetching(state)).toBe(state.isFetching);
	});
});