import { UserActionTypes } from "./user";

export const setUser = (data: firebase.User): UserActionTypes => ({
  type: "USER_SET",
  payload: data,
});
