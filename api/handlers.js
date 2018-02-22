const { getCharity, getDonations } = require('./api');

const combineCharityData = (charityResponse, donationsResponse) => {
	return {
		...charityResponse.data,
		donations: donationsResponse.data.donations
	}
};

const handleGetCharity = (req, res) => {
	const charityId = req.params.charityId;

	Promise.all([getCharity(charityId), getDonations(charityId)])
		.then(([charityResponse, donationsResponse]) => {
			res.setHeader('Content-Type', 'application/json');

			const data = combineCharityData(charityResponse, donationsResponse)

			res.send(data);
		})
		.catch(errors => {
			res.status(500)
				.send('Server error');
		});
}

module.exports = {
	combineCharityData,
	handleGetCharity
}