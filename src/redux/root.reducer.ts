import { combineReducers } from "redux";
import urlTrackerReducer from "./url-tracker/url-tracker.reducer";
import userReducer from "./user/user.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["urlTracker"],
};

const rootReducer = combineReducers({
  user: userReducer,
  urlTracker: urlTrackerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default persistReducer(persistConfig, rootReducer);
