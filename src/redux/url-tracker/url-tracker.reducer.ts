import { UrlTrackerActionTypes, UrlTrackerState } from "./url-tracker";

const INIT_STATE: UrlTrackerState = {
  lastUrl: undefined,
};

const urlTrackerReducer = (state = INIT_STATE, action: UrlTrackerActionTypes) => {
  switch (action.type) {
    case "SET_LAST_URL":
      return {
        ...state,
        lastUrl: action.payload,
      };
    default:
      return state;
  }
};

export default urlTrackerReducer;
