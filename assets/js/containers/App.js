import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getCharity } from '../store/actions';

// Components
import CharityScreen from '../components/CharityScreen';
import LoadingScreen from '../components/LoadingScreen';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { dispatch, charityId } = this.props;
		dispatch(getCharity(charityId));
	}

	render() {
		const { charity, isFetching } = this.props;

		return !isFetching && charity
			? <CharityScreen charity={charity} />
			: <LoadingScreen />;
	}
}

App.propTypes = {
	charity: PropTypes.object,
	dispatch: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
}

function mapStateToProps({ charity, isFetching }) {
	return {
		charity,
		isFetching
	}
}

export default connect(mapStateToProps)(App);