import { UrlTrackerActionTypes } from "./url-tracker";

export const setLastUrl = (data: string): UrlTrackerActionTypes => ({
  type: "SET_LAST_URL",
  payload: data,
});
