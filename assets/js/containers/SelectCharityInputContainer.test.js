import React from 'react';
import { shallow } from 'enzyme';
import SelectCharityInputContainer from './SelectCharityInputContainer';

describe('SelectCharityInputContainer', () => {
	let shallowSelectCharityInputContainer;
	let props;
	const selectCharityInputContainer = () => {

	}

	beforeEach(() => {
		props = {
			selectedCharity: null
		}
	});

	it('Renders SelectCharityInput', () => {
		expect(shallow(SelectCharityInputContainer)).toMatchSnapshot();
	});
});