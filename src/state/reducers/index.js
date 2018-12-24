import auth from './auth';
import main from './main';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  main,
  form: formReducer
});

export default rootReducer;