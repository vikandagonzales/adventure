import {
  GET_GROUPS,
  GET_GROUP,
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  ADD_GROUP_RESET,
  EDIT_GROUP_SUCCESS,
  EDIT_GROUP_FAILURE,
  EDIT_GROUP_RESET,
  DELETE_GROUP_SUCCESS,
  DELETE_GROUP_FAILURE,
  DELETE_GROUP_RESET
} from '../actions/groups';

let initial = {
  groups: [],
  group: {},
  addGroupError: false,
  editGroupError: false,
  deleteGroupError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {...state, groups: action.payload};
    case GET_GROUP:
      return {...state, group: action.payload};
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
    default:
      return state;
  }
};