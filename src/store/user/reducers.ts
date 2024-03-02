import type { UserType } from "../../types/TestTypes";

import {
  ADD_DATA_TEST_SUCCESS,
  UserActionTypes,
  UserState,
} from "./types";

const initialState: UserState = {
  user: {} as UserType,
};

export function userReducer(state = initialState, action: UserActionTypes) {
  switch (action.type) {
    case ADD_DATA_TEST_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
