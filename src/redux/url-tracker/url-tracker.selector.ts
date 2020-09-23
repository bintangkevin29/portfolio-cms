import { createSelector } from "reselect";
import { RootState } from "../root.reducer";
import { UrlTrackerState } from "./url-tracker";

const urlTrackerState = (state: RootState): UrlTrackerState => state.urlTracker;

export const selectLastUrl = createSelector([urlTrackerState], (data) => data.lastUrl);
