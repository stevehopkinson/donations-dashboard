import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectCharityInput extends Component {
	render() {
		const { onChange, selectedCharity } = this.props;
		const charitiesList = [
			{
				id: 2116,
				name: 'Macmillan'
			},
			{
				id: 2117,
				name: 'Kidneys'
			},
		];

		return <div className='select-charity__container'>
			<select onChange={event => onChange(event.target.value)}>
				{
					charitiesList.map((charity, i) => 
						<option 
							key={charity.id}
							value={charity.id}
							selected={selectedCharity === charity.id}
						>{charity.name}</option>
					)
				}
			</select>
		</div>
	}
}

SelectCharityInput.propTypes = {
	selectedCharity: PropTypes.number.isRequired
}