import { Dispatch } from "redux";
import {
  ADD_DATA_TEST_ERROR,
  ADD_DATA_TEST_PENDING,
  ADD_DATA_TEST_SUCCESS,
} from "./types";

export const getDataTest = (
  cb?: (e?: any) => void,
  onError?: (err?: any) => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADD_DATA_TEST_PENDING });
  } catch (err) {
    dispatch({ type: ADD_DATA_TEST_ERROR });
  }
};
