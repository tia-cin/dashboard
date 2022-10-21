import { ActionInterface, GOOGLE_LOGIN, StateType } from "../types";

const initialState: StateType = {
  user: null,
};

export const reducer = (
  state = initialState,
  action: ActionInterface
): StateType => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
