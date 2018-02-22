const axios = require('axios');

const instance = axios.create({
	baseURL: process.env.JUST_GIVING_API_URL,
	headers: {
		'Content-Type': 'application/json',
	}
});

const makeGetRequest = url => instance.get(url);

const getCharity = charityId => makeGetRequest(`/${process.env.JUST_GIVING_APP_ID}/v1/charity/${charityId}`);

const getDonations = charityId => makeGetRequest(`/${process.env.JUST_GIVING_APP_ID}/v1/charity/${charityId}/donations`);

module.exports = {
	getCharity,
	getDonations
}