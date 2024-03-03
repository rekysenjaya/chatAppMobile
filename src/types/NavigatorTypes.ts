export type RootStackParamList = {
  Chat: {
    to: string,
    me: string,
  };
  Home: undefined;
};

export type RootType =
  | "Home"
  | "Chat";
