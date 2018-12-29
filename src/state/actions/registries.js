import Registries from '../models/registries';

export const GET_REGISTRIES = 'GET_REGISTRIES';
export const ADD_REGISTRY_SUCCESS = 'ADD_REGISTRY_SUCCESS';
export const ADD_REGISTRY_FAILURE = 'ADD_REGISTRY_FAILURE';
export const ADD_REGISTRY_RESET = 'ADD_REGISTRY_RESET';
export const EDIT_REGISTRY_SUCCESS = 'EDIT_REGISTRY_SUCCESS';
export const EDIT_REGISTRY_FAILURE = 'EDIT_REGISTRY_FAILURE';
export const EDIT_REGISTRY_RESET = 'EDIT_REGISTRY_RESET';
export const DELETE_REGISTRY_SUCCESS = 'DELETE_REGISTRY_SUCCESS';
export const DELETE_REGISTRY_FAILURE = 'DELETE_REGISTRY_FAILURE';
export const DELETE_REGISTRY_RESET = 'DELETE_REGISTRY_RESET';

export const getRegistries = () => {
  return async dispatch => {
    const payload = await Registries.getRegistries();
    dispatch({type: GET_REGISTRIES, payload});
  };
};

export const addRegistry = registry => {
  return async dispatch => {
    try {
      const payload = await Registries.addRegistry(registry);
      dispatch({type: ADD_REGISTRY_SUCCESS, payload});
    } catch (err) {
      dispatch({type: ADD_REGISTRY_FAILURE, payload: err});
    }
  };
};

export const addRegistryReset = () => {
  return dispatch => {
    dispatch({type: ADD_REGISTRY_RESET});
  };
};

export const editRegistry = (registry, id) => {
  return async dispatch => {
    try {
      const payload = await Registries.editRegistry(registry, id);
      dispatch({type: EDIT_REGISTRY_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_REGISTRY_FAILURE, payload: err});
    }
  };
};

export const editRegistryReset = () => {
  return dispatch => {
    dispatch({type: EDIT_REGISTRY_RESET});
  };
};

export const deleteRegistry = id => {
  return async dispatch => {
    try {
      const payload = await Registries.deleteRegistry(id);
      dispatch({type: DELETE_REGISTRY_SUCCESS, payload});
    } catch (err) {
      dispatch({type: DELETE_REGISTRY_FAILURE, payload: err});
    }
  };
};

export const deleteRegistryReset = () => {
  return dispatch => {
    dispatch({type: DELETE_REGISTRY_RESET});
  };
};