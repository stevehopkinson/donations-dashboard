const { combineCharityData } = require('./handlers');

describe('Test combineCharityData function', () => {
	it('Should flatten both responses into an object with the correct structure', () => {
		let charityResponse = {
			data: {
				charity: 'foo'
			}
		};

		let donationsResponse = {
			data: {
				donations: [
					{
						name: 'bar'
					}
				]
			}
		};

		let expected = {
			charity: 'foo',
			donations: [
				{
					name: 'bar'
				}
			]
		}

		let result = combineCharityData(charityResponse, donationsResponse);

		expect(result).toMatchObject(expected);
	});
});