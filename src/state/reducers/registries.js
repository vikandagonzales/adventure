import {
  GET_REGISTRIES,
  ADD_REGISTRY_SUCCESS,
  ADD_REGISTRY_FAILURE,
  ADD_REGISTRY_RESET,
  EDIT_REGISTRY_SUCCESS,
  EDIT_REGISTRY_FAILURE,
  EDIT_REGISTRY_RESET,
  DELETE_REGISTRY_SUCCESS,
  DELETE_REGISTRY_FAILURE,
  DELETE_REGISTRY_RESET
} from '../actions/registries';

let initial = {
  registries: [],
  addRegistryError: false,
  editRegistryError: false,
  deleteRegistryError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_REGISTRIES:
      return {...state, registries: action.payload};
    case ADD_REGISTRY_SUCCESS:
      return {...state, registries: action.payload, addRegistryError: false};
    case ADD_REGISTRY_FAILURE:
      return {...state, addRegistryError: true};
    case ADD_REGISTRY_RESET:
      return {...state, addRegistryError: false};
    case EDIT_REGISTRY_SUCCESS:
      return {...state, registries: action.payload, editRegistryError: false};
    case EDIT_REGISTRY_FAILURE:
      return {...state, editRegistryError: true};
    case EDIT_REGISTRY_RESET:
      return {...state, editRegistryError: false};
    case DELETE_REGISTRY_SUCCESS:
      return {...state, registries: action.payload, deleteRegistryError: false};
    case DELETE_REGISTRY_FAILURE:
      return {...state, deleteRegistryError: true};
    case DELETE_REGISTRY_RESET:
      return {...state, deleteRegistryError: false};
    default:
      return state;
  }
};