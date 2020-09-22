import { createSelector } from "reselect";
import { RootState } from "../root.reducer";

const userState = (state: RootState) => state.user;

export const selectUser = createSelector([userState], (data) => data.user);
