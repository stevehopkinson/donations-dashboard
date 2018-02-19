import React, { Component } from 'react'
import PropTypes from 'prop-types'

import DonationCard from './DonationCard';
 
export default class DonationsSection extends Component {
    render() {
    	const { donations } = this.props;

        return (
            <div className="donation__container">
                { 
                	donations.map((donation, i) => <DonationCard donation={donation} key={i} /> ) 
                }
            </div>
        )
    }
}

DonationsSection.propTypes = {
	donations: PropTypes.arrayOf(
		PropTypes.object.isRequired
	).isRequired
};