import { combineReducers } from "redux";

import menuReducer from "./menuReducer"
import authReducer from "./authReducer"
import usersReducer from "./usersReducer"

export default combineReducers({
	auth: authReducer,
	menu: menuReducer,
	users: usersReducer
});