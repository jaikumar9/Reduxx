import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./Reducers/taskReducer";

const store = configureStore({
  reducer: taskReducer,
  middleware: [thunk],
  devTools: composeWithDevTools(),
});

export default store;
