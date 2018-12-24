import Groups from '../models/groups';

export const GET_GROUPS = 'GET_GROUPS';
export const GET_GROUP = 'GET_GROUP';
export const ADD_GROUP_SUCCESS = 'ADD_GROUP_SUCCESS';
export const ADD_GROUP_FAILURE = 'ADD_GROUP_FAILURE';
export const ADD_GROUP_RESET = 'ADD_GROUP_RESET';
export const EDIT_GROUP_SUCCESS = 'EDIT_GROUP_SUCCESS';
export const EDIT_GROUP_FAILURE = 'EDIT_GROUP_FAILURE';
export const EDIT_GROUP_RESET = 'EDIT_GROUP_RESET';
export const DELETE_GROUP_SUCCESS = 'DELETE_GROUP_SUCCESS';
export const DELETE_GROUP_FAILURE = 'DELETE_GROUP_FAILURE';
export const DELETE_GROUP_RESET = 'DELETE_GROUP_RESET';

export const getGroups = () => {
  return async dispatch => {
    const payload = await Groups.getGroups();
    dispatch({type: GET_GROUPS, payload});
  };
};

export const getGroup = id => {
  return async dispatch => {
    const payload = await Groups.getGroup(id);
    dispatch({type: GET_GROUP, payload});
  };
};

export const addGroup = group => {
  return async dispatch => {
    try {
      const payload = await Groups.addGroup(group);
      dispatch({type: ADD_GROUP_SUCCESS, payload});
    } catch (err) {
      dispatch({type: ADD_GROUP_FAILURE, payload: err});
    }
  };
};

export const addGroupReset = () => {
  return dispatch => {
    dispatch({type: ADD_GROUP_RESET});
  };
};

export const editGroup = (group, id) => {
  return async dispatch => {
    try {
      const payload = await Groups.editGroup(group, id);
      dispatch({type: EDIT_GROUP_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_GROUP_FAILURE, payload: err});
    }
  };
};

export const editGroupReset = () => {
  return dispatch => {
    dispatch({type: EDIT_GROUP_RESET});
  };
};

export const deleteGroup = id => {
  return async dispatch => {
    try {
      const payload = await Groups.deleteGroup(id);
      dispatch({type: DELETE_GROUP_SUCCESS, payload});
    } catch (err) {
      dispatch({type: DELETE_GROUP_FAILURE, payload: err});
    }
  };
};

export const deleteGroupReset = () => {
  return dispatch => {
    dispatch({type: DELETE_GROUP_RESET});
  };
};