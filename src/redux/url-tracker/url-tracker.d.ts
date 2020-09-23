export type UrlTrackerActionTypes = {
  type: "SET_LAST_URL";
  payload: string;
};

export interface UrlTrackerState {
  lastUrl: string | undefined;
}
