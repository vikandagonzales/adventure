import auth from './auth';
import guests from './guests';
import details from './details';
import registries from './registries';
import admin from './admin';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  guests,
  details,
  registries,
  admin,
  form: formReducer
});

export default rootReducer;