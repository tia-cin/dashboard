import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./store";

export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";

interface GoogleLogIn {
  type: typeof GOOGLE_LOGIN;
  payload: any;
}

export const googleLogIn = (
  res: any
): ThunkAction<void, RootState, null, GoogleLogIn> => {
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

export type ActionInterface = GoogleLogIn;
