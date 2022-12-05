import { combineReducers } from "redux";

import { reducer as authReducer } from "./auth";
import { reducer as crudReducer } from "./crud";
import { reducer as searchReducer } from "./search";
import { reducer as membershipReducer } from "./membership"
import * as actionTypes from "./auth/types";

// Combine all reducers.

const appReducer = combineReducers({
  auth: authReducer,
  crud: crudReducer,
  search: searchReducer,
  register: membershipReducer
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
