import React, { Component } from 'react'
import PropTypes from 'prop-types'
 
export default class CharityHeader extends Component {
    render() {
    	const { description, logoUrl, name } = this.props;

        return (
            <div className="header__container">
                <h1 className="header__title">{name}</h1>
                <p className="header__description">{description}</p>
            </div>  
        )
    }
}

CharityHeader.propTypes = {
    description: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};