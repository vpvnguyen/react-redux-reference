import { counterReducer } from "./counter";
import { combineReducers } from "redux";
import { signOnReducer } from "./signOn";

export const allReducers = combineReducers({
  // call name the key whatever you want; use name of key to call
  counter: counterReducer,
  signOn: signOnReducer,
});
