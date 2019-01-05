import auth from './auth';
import groups from './groups';
import details from './details';
import registries from './registries';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  groups,
  details,
  registries,
  form: formReducer
});

export default rootReducer;