const express = require('express');
const handlers = require('./handlers');

const router = express.Router();

router.route('/charities/:charityId')
	.get(handlers.handleGetCharity);

module.exports = router;