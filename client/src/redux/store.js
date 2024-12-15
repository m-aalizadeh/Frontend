import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/root";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
