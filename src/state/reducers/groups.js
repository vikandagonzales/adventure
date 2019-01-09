import {
  GET_GROUPS,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  ADD_GROUP_RESET,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_FAILURE,
  EDIT_GROUP_RESET,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
  DELETE_GROUP_RESET,
  GET_GUESTS,
  ADD_GUEST_SUCCESS,
  ADD_GUEST_FAILURE,
  ADD_GUEST_RESET,
  EDIT_GUEST_SUCCESS,
  EDIT_GUEST_FAILURE,
  EDIT_GUEST_RESET,
  DELETE_GUEST_SUCCESS,
  DELETE_GUEST_FAILURE,
  DELETE_GUEST_RESET
} from '../actions/groups';

let initial = {
  groups: [],
  addGroupError: false,
  editGroupError: false,
  deleteGroupError: false,
  guests: [],
  addGuestError: false,
  editGuestError: false,
  deleteGuestError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {...state, groups: action.payload};
    case ADD_GROUP_SUCCESS:
      return {...state, groups: action.payload, addGroupError: false};
    case ADD_GROUP_FAILURE:
      return {...state, addGroupError: true};
    case ADD_GROUP_RESET:
      return {...state, addGroupError: false};
    case EDIT_GROUP_SUCCESS:
      return {...state, groups: action.payload, editGroupError: false};
    case EDIT_GROUP_FAILURE:
      return {...state, editGroupError: true};
    case EDIT_GROUP_RESET:
      return {...state, editGroupError: false};
    case DELETE_GROUP_SUCCESS:
      return {...state, groups: action.payload, deleteGroupError: false};
    case DELETE_GROUP_FAILURE:
      return {...state, deleteGroupError: true};
    case DELETE_GROUP_RESET:
      return {...state, deleteGroupError: false};
    case GET_GUESTS:
      return {...state, guests: action.payload};
    case ADD_GUEST_SUCCESS:
      return {...state, groups: action.payload, addGuestError: false};
    case ADD_GUEST_FAILURE:
      return {...state, addGuestError: true};
    case ADD_GUEST_RESET:
      return {...state, addGuestError: false};
    case EDIT_GUEST_SUCCESS:
      return {...state, groups: action.payload, editGuestError: false};
    case EDIT_GUEST_FAILURE:
      return {...state, editGuestError: true};
    case EDIT_GUEST_RESET:
      return {...state, editGuestError: false};
    case DELETE_GUEST_SUCCESS:
      return {...state, groups: action.payload, deleteGuestError: false};
    case DELETE_GUEST_FAILURE:
      return {...state, deleteGuestError: true};
    case DELETE_GUEST_RESET:
      return {...state, deleteGuestError: false};
    default:
      return state;
  }
};