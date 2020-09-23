import { combineReducers } from "redux";
import urlTrackerReducer from "./url-tracker/url-tracker.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  urlTracker: urlTrackerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
