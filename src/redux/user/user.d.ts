export type UserActionTypes = {
  type: "USER_SET";
  payload: firebase.User;
};

export interface UserState {
  user: firebase.User | undefined;
}
