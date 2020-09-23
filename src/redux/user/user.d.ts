export type UserActionTypes =
  | {
      type: "USER_SET";
      payload: firebase.User;
    }
  | {
      type: "RESET_USER";
    };

export interface UserState {
  user: firebase.User | undefined;
}
