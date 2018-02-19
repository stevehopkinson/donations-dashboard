import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getCharity } from '../store/actions';

// Components
import CharityScreen from '../components/CharityScreen';
import LoadingScreen from '../components/LoadingScreen';

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getCharity(2116));
	}

	render() {
		const { charity, isFetching } = this.props;

		return (
			<div>
				{
					!isFetching &&
						<CharityScreen charity={charity} />
				}
				{
					isFetching &&
						<LoadingScreen />
				}
			</div>
		)
	}
}

App.propTypes = {
	charity: PropTypes.object,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

function mapStateToProps({ charity, isFetching}) {
	return {
		charity,
		isFetching
	}
}

export default connect(mapStateToProps)(App);