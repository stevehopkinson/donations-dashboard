import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import CharityHeader from './CharityHeader';
import DonationsSection from './DonationsSection';

// Containers
import SelectCharityInputContainer from '../containers/SelectCharityInputContainer';
 
export default class CharityScreen extends Component {
    render() {
    	const { charity } = this.props;

        return (
            <div className="charity-screen__container">
                <SelectCharityInputContainer />
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