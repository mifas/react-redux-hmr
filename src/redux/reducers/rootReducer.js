import { combineReducers } from "redux";

import testReducer from "./testReducers";

const rootReducer = combineReducers({
  test: testReducer,
});

export default rootReducer;
