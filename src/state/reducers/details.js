import {
  GET_DETAILS,
  EDIT_DETAILS_SUCCESS,
  EDIT_DETAILS_FAILURE,
  EDIT_DETAILS_RESET
} from '../actions/details';

let initial = {
  details: {},
  editDetailsError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {...state, details: action.payload};
    case EDIT_DETAILS_SUCCESS:
      return {...state, details: action.payload, editDetailsError: false};
    case EDIT_DETAILS_FAILURE:
      return {...state, editDetailsError: true};
    case EDIT_DETAILS_RESET:
      return {...state, editDetailsError: false};
    default:
      return state;
  }
};