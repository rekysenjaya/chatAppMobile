import type { ChatItem, ReadData } from "../../types/TestTypes";
export interface UserState {
  user: string[];
  chat: ChatItem[];
}

export const SEND_CHAT = "SEND_CHAT";
export const READ_CHAT = "READ_CHAT";

interface SendChat {
  type: typeof SEND_CHAT;
  payload: ChatItem;
}

interface ReadChat {
  type: typeof READ_CHAT;
  payload: ReadData;
}

export type UserActionTypes =
  | SendChat
  | ReadChat;
