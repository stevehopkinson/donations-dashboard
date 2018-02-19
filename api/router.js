const api = require('./api');
const express = require('express');

const router = express.Router();

router.route('/charities/:charityId')
	.get((req, res) => {
		api.getCharityData(req.params.charityId)
			.then(([charityResponse, donationsResponse]) => {
				res.setHeader('Content-Type', 'application/json');

				res.send({
					...charityResponse.data,
					donations: donationsResponse.data.donations
				});
			})
			.catch(errors => {
				res.status(500)
					.send('Server error');
			});
	});

module.exports = router;