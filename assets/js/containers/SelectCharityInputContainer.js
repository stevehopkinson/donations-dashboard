import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getCharity, setSelectedCharity } from '../store/actions';

// Components
import SelectCharityInput from '../components/SelectCharityInput';

export class SelectCharityInputContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { getCharity, onChange } = this.props;

		return <SelectCharityInput onChange={onChange} />;
	}
}

const mapDispatchToProps = (dispatch, state) => {
	return {
		onChange: id => dispatch(getCharity(id))
	}
}

const mapStateToProps = ({ selectedCharity }) => {
	return {
		selectedCharity
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCharityInputContainer);