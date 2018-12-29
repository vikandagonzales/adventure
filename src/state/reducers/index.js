import auth from './auth';
import main from './main';
import details from './details';
import registries from './registries';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  main,
  details,
  registries,
  form: formReducer
});

export default rootReducer;