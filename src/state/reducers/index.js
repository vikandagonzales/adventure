import auth from './auth';
import groups from './groups';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  groups,
  form: formReducer
});

export default rootReducer;