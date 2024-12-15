import { combineReducers } from "redux";
import userReducer from "./user";

const rootReducer = combineReducers({ userDetails: userReducer });

export default rootReducer;
