import { combineReducers } from "redux";
import releaseReducer from './releaseReducer'
import userReducer from './userReducer'
 
const rootReducer = combineReducers({
  releases: releaseReducer,
  users: userReducer
});

export default rootReducer;
