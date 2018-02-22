import React from 'react';
import { shallow } from 'enzyme';
import DonationsSection from './DonationsSection';

describe('DonationsSection', () => {
	let props;
	let shallowDonationsSection;
	const donationsSection = () => {
		if (!shallowDonationsSection) {
			shallowDonationsSection = shallow(
				<DonationsSection {...props} />
			);
		}

		return shallowDonationsSection;
	}

	beforeEach(() => {
		props = {
			donations: []
		};
		shallowDonationsSection = undefined;
	});

	it('Renders no donations if donations array is empty', () => {
		const donationCards = donationsSection().find('DonationCard');
		expect(donationCards.length).toBe(0);
	});

	it('Renders three donation cards if donations array contains three items', () => {
		props = {
			donations: [
				{},
				{},
				{}
			]
		};
		const donationCards = donationsSection().find('DonationCard');
		expect(donationCards.length).toBe(3);
	});
});