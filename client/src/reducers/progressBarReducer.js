import { PROGRESS_LOADER } from "../constant/progressBarConstant";

export const progressBarReducer = (state = 0, action) => {
  switch (action.type) {
    case PROGRESS_LOADER:
      return action.payload;
    default:
      return state;
  }
};
