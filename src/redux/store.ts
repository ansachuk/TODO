import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import TodoReducer from "./TodoSlice";

const persistTodoConfig = {
	key: "todos",
	storage,
};

const persistedReducer = persistReducer(persistTodoConfig, TodoReducer);

const store = configureStore({
	// reducer: {
	// 	todos: persistedReducer,
	// },

	reducer: persistedReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);
export default store;
