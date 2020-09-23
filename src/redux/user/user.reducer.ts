import { UserActionTypes, UserState } from "./user";

const INIT_STATE: UserState = {
  user: undefined,
};

const userReducer = (state = INIT_STATE, action: UserActionTypes): UserState => {
  switch (action.type) {
    case "USER_SET":
      return {
        ...state,
        user: action.payload,
      };
    case "RESET_USER":
      return {
        user: undefined,
      };
    default:
      return state;
  }
};

export default userReducer;
