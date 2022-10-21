import jwt_decode from "jwt-decode";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../types";
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
