import { ActionInterface, GOOGLE_LOGIN } from "./actions";

export interface State {
  user: null | {};
}

const initialState: State = {
  user: null,
};

export const reducer = (
  state = initialState,
  action: ActionInterface
): State => {
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
