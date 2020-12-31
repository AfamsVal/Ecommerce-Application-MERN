import { PROGRESS_LOADER } from "../constant/progressBarConstant";

export const progressAction = (no) => (dispatch) => {
  dispatch({
    type: PROGRESS_LOADER,
    payload: no,
  });
};
