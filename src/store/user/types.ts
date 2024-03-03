import type { ChatItem, ChatType, UserType } from "../../types/TestTypes";
export interface UserState {
  user: string[];
  chat: ChatItem[];
}

export const SEND_CHAT = "SEND_CHAT";

interface SendChat {
  type: typeof SEND_CHAT;
  payload: ChatType;
}

export type UserActionTypes =
  | SendChat;
