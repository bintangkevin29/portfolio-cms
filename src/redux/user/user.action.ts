import { User } from "firebase";
import { UserActionTypes } from "./user";

export const setUser = (data: firebase.User): UserActionTypes => ({
  type: "USER_SET",
  payload: data,
});

export const resetUser = (): UserActionTypes => ({
  type: "RESET_USER",
});
