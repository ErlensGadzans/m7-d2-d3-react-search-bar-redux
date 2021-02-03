import { initialState } from "../store";

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBS":
      return {
        ...state,
        jobs: action.payload,
      };

    default:
      return state;
  }
};
