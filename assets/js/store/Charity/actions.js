import { createAction } from 'redux-actions';

export const getCharityRequest = createAction('GET_CHARITY_REQUEST');
export const getCharitySuccess = createAction('GET_CHARITY_SUCCESS');
export const getCharityFailure = createAction('GET_CHARITY_FAILURE');

export const getCharity = charityId => (dispatch, getState, api) => {
	dispatch(getCharityRequest());

	api.getCharityData(charityId)
		.then(({ data }) => dispatch(getCharitySuccess(data)))
		.catch(error => dispatch(getCharityFailure(error)));
}