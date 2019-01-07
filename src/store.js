import {applyMiddleware, createStore} from 'redux';
import rootReducer from './state/reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      rootReducer,
      applyMiddleware(logger, thunkMiddleware)
    );
  } else {
    return createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware)
    );
  }
};