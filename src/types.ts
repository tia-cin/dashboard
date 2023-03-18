import { reducer } from "./redux/reducer";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";

// ACTIONS
export interface ActionGoogleLogIn {
  type: typeof GOOGLE_LOGIN;
  payload: any;
}

export type ActionInterface = ActionGoogleLogIn;

// STATE
export interface StateType {
  user: null | any;
}

// STORE
export type RootState = ReturnType<typeof reducer>;
