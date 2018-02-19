import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CharityHeader from './CharityHeader';
import DonationsSection from './DonationsSection';
 
export default class CharityScreen extends Component {
    render() {
    	const { charity } = this.props;

        return (
            <div className="charity-screen__container">
                <CharityHeader 
                	name={charity.name} 
                	description={charity.description}
                	logoUrl={charity.logoAbsoluteUrl} 
                />
                <DonationsSection
                	donations={charity.donations}
                />
            </div>
        )
    }
}

CharityScreen.propTypes = {
	charity: PropTypes.object.isRequired
}