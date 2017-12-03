import { combineReducers } from 'redux';

import appReducer from './containers/App/reducer';

const rootReducers = combineReducers({
    appReducer,
});

export default rootReducers;
