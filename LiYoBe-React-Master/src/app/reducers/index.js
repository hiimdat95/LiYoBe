// import { combineReducers } from 'redux';

// import { authentication } from './authentication.reducer';
// import { users } from './users.reducers';
// import { alert } from './alert.reducer';

// const rootReducer = combineReducers({
//   authentication,
//   users,
//   alert
// });

// export default rootReducer;

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as notifications } from "react-notification-system-redux";
import { layout } from "../layouts/Dashboard/Dashboard";

export const rootReducer=(asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    layout,
    router,
    notifications,
    ...asyncReducers
  })
}
export const injectReducer=(store,{key,reducer})=>{
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer(store.asyncReducers))
}
export default rootReducer
