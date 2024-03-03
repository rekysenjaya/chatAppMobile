import { Dispatch } from "redux";
import {
  SEND_CHAT
} from "./types";

export const sendChat = (
  to: string,
  me: string,
  chat: string
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: SEND_CHAT, payload: { to, me, chat, read: false, id: Date.now() } });
  } catch (err) {

  }
};
