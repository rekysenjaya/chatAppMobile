import { useSelector } from "react-redux";
import type { StoreStateType } from "../store";

export const useUserData = () => {
  return useSelector((state: StoreStateType) => state.user.user);
};

export const useChatData = () => {
  return useSelector((state: StoreStateType) => state.user.chat);
};