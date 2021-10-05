import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;
