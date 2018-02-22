import React from 'react';
import { mount } from 'enzyme';
import Root from './Root';

describe('Root', () => {
	let shallowRoot;
	const root = () => {
		if (!shallowRoot) {
			shallowRoot = mount(
				<Root />
			);
			return shallowRoot;
		}
	}

	beforeEach(() => {
		shallowRoot = undefined;
	});

	it('Renders App', () => {
		const app = root().find('App');
		expect(app.length).toBe(1);
	})
});