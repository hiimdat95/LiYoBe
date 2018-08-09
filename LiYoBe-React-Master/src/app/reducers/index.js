import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducers';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert
});

export default rootReducer;