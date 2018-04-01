import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

const mockDispatch = f => f;

describe('App', () => {
	let props;
	let shallowApp;
	const app = () => {
		if (!shallowApp) {
			shallowApp = shallow(
				<App {...props} />
			);
			return shallowApp;
		}
	}

	beforeEach(() => {
		props = {
			dispatch: mockDispatch,
			hasErrored: false,
			isFetching: false
		};
		shallowApp = undefined;
	});

	it('Renders LoadingScreen if isFetching is false and charity isn\'t passed', () => {
		const loadingScreen = app().find('LoadingScreen');
		expect(loadingScreen.length).toBe(1);
	});

	it('Renders LoadingScreen if charity is passed and isFetching is true', () => {
		props.isFetching = true;
		const loadingScreen = app().find('LoadingScreen');
		expect(loadingScreen.length).toBe(1);
	});

	it('Doesn\'t render LoadingScreen if charity is passed and isn\'t fetching', () => {
		props.charity = {
			name: 'example',
		};
		const loadingScreen = app().find('LoadingScreen');
		expect(loadingScreen.length).toBe(0);
	});

	it('Doesn\'t render CharityScreen if isFetching is false and charity isn\'t passed', () => {
		const charityScreen = app().find('CharityScreen');
		expect(charityScreen.length).toBe(0);
	});

	it('Doesn\'t render CharityScreen if charity is passed and isFetching is true', () => {
		props.isFetching = true;
		const charityScreen = app().find('CharityScreen');
		expect(charityScreen.length).toBe(0);
	});

	it('Renders CharityScreen if charity is passed and isn\'t fetching', () => {
		props.charity = {
			name: 'example',
		};
		const charityScreen = app().find('CharityScreen');
		expect(charityScreen.length).toBe(1);
	});

	it('Renders ErrorScreen if hasErrored is passed and is true', () => {
		props.hasErrored = true;
		const errorScreen = app().find('ErrorScreen');
		expect(errorScreen.length).toBe(1);
	});
})