import type { UserType } from "../../types/TestTypes";
export interface UserState {
  user: UserType;
}

export const ADD_DATA_TEST_PENDING = "ADD_DATA_TEST_PENDING";
export const ADD_DATA_TEST_SUCCESS = "ADD_DATA_TEST_SUCCESS";
export const ADD_DATA_TEST_ERROR = "ADD_DATA_TEST_ERROR";

interface AddDataTestAction {
  type: typeof ADD_DATA_TEST_SUCCESS;
  payload: UserType;
}

export type UserActionTypes =
  | AddDataTestAction;
