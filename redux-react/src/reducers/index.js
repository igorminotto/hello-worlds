import { combineReducers } from "redux";
import counterReducer from "./counter";
import authReducer from "./auth";

export default combineReducers({
  auth: authReducer,
  counter: counterReducer,
});
