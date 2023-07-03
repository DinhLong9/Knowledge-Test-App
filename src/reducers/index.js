import { combineReducers } from "redux";

import { loginReducer } from "./loginReducers";

export const allReducers = combineReducers({ loginReducer });
