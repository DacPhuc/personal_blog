import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

export const store = createStore(rootReducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
