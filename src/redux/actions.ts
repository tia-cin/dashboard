import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import {
  ActionCreateNewUser,
  CREATE_NEW_USER,
  RootState,
  UserType,
} from "../types";
import { ActionGoogleLogIn, GOOGLE_LOGIN } from "../types";

export const googleLogIn = (
  res: any
): ThunkAction<void, RootState, null, ActionGoogleLogIn> => {
  return async (dispatch) => {
    const user: any = jwt_decode(res.credential);
    return dispatch({
      type: GOOGLE_LOGIN,
      payload: {
        username: user.name,
        email: user.email,
        picture: user.picture,
        type: "account",
      },
    });
  };
};

export const createNewUser = (
  newUser: UserType
): ThunkAction<void, RootState, null, ActionCreateNewUser> => {
  return async (dispatch) =>
    dispatch({
      type: CREATE_NEW_USER,
      payload: newUser,
    });
};
