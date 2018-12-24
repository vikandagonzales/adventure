import auth from './auth';
import groups from './groups';
import guests from './guests';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  groups,
  guests,
  form: formReducer
});

export default rootReducer;