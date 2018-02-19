import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class DonationCard extends Component {
    render() {
    	const { donation } = this.props;

        return (
            <div className="donation__card">
                <div className="donation__header">
                    <div className="donation__image" style={{backgroundImage: `url('${donation.imageUrl}')`}}></div>
                    <div className="donation__header-info">
                        <p className="donation__name">{donation.donorDisplayName}</p>
                        { 
                            donation.amount &&
                            <p className="donation__amount">£{donation.amount}</p>
                        }
                    </div>
                </div>
                <div className="donation__body">
                    <p>"{donation.message}"</p>
                </div>
            </div>
        )
    }
}

DonationCard.propTypes = {
	donation: PropTypes.object.isRequired
};