import Guests from '../models/guests';

export const GET_GROUP = 'GET_GROUP';
export const ADD_GUEST_SUCCESS = 'ADD_GUEST_SUCCESS';
export const ADD_GUEST_FAILURE = 'ADD_GUEST_FAILURE';
export const ADD_GUEST_RESET = 'ADD_GUEST_RESET';
export const EDIT_GUEST_SUCCESS = 'EDIT_GUEST_SUCCESS';
export const EDIT_GUEST_FAILURE = 'EDIT_GUEST_FAILURE';
export const EDIT_GUEST_RESET = 'EDIT_GUEST_RESET';
export const DELETE_GUEST_SUCCESS = 'DELETE_GUEST_SUCCESS';
export const DELETE_GUEST_FAILURE = 'DELETE_GUEST_FAILURE';
export const DELETE_GUEST_RESET = 'DELETE_GUEST_RESET';

export const getGroup = id => {
  return async dispatch => {
    const payload = await Guests.getGroup(id);
    dispatch({type: GET_GROUP, payload});
  };
};

export const addGuest = (guest, group_id) => {
  return async dispatch => {
    try {
      const payload = await Guests.addGuest(guest, group_id);
      dispatch({type: ADD_GUEST_SUCCESS, payload});
    } catch (err) {
      dispatch({type: ADD_GUEST_FAILURE, payload: err});
    }
  };
};

export const addGuestReset = () => {
  return dispatch => {
    dispatch({type: ADD_GUEST_RESET});
  };
};

export const editGuest = (guest, guest_id, group_id) => {
  return async dispatch => {
    try {
      const payload = await Guests.editGuest(guest, guest_id, group_id);
      dispatch({type: EDIT_GUEST_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_GUEST_FAILURE, payload: err});
    }
  };
};

export const editGuestReset = () => {
  return dispatch => {
    dispatch({type: EDIT_GUEST_RESET});
  };
};

export const deleteGuest = (guest_id, group_id) => {
  return async dispatch => {
    try {
      const payload = await Guests.deleteGuest(guest_id, group_id);
      dispatch({type: DELETE_GUEST_SUCCESS, payload});
    } catch (err) {
      dispatch({type: DELETE_GUEST_FAILURE, payload: err});
    }
  };
};

export const deleteGuestReset = () => {
  return dispatch => {
    dispatch({type: DELETE_GUEST_RESET});
  };
};