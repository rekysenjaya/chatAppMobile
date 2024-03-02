import AsyncStorage from "@react-native-async-storage/async-storage";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

import { userReducer } from "./user/reducers";
import type { UserState } from "./user/types";

export interface StoreStateType {
  user: UserState;
}

const rootReducer: any = combineReducers({
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
