import Details from '../models/details';

export const GET_DETAILS = 'GET_DETAILS';
export const EDIT_DETAILS_SUCCESS = 'EDIT_DETAILS_SUCCESS';
export const EDIT_DETAILS_FAILURE = 'EDIT_DETAILS_FAILURE';
export const EDIT_DETAILS_RESET = 'EDIT_DETAILS_RESET';

export const getDetails = () => {
  return async dispatch => {
    const payload = await Details.getDetails();
    dispatch({type: GET_DETAILS, payload});
  };
};

export const editDetails = details => {
  return async dispatch => {
    try {
      const payload = await Details.editDetails(details);
      dispatch({type: EDIT_DETAILS_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_DETAILS_FAILURE, payload: err});
    }
  };
};

export const editDetailsReset = () => {
  return dispatch => {
    dispatch({type: EDIT_DETAILS_RESET});
  };
};