import { counterReducer } from "./counter";
import { loggedReducer } from "./isLogged";
import { combineReducers } from "redux";
import { signOnReducer } from "./signOn";

export const allReducers = combineReducers({
  // call name the key whatever you want; use name of key to call
  counter: counterReducer,
  isLogged: loggedReducer,
  signOn: signOnReducer,
});
