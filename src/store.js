import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import taskReducer from "./Reducers/taskReducer";

const store = configureStore({
  reducer: {
    task: taskReducer, // Assuming "task" is the name of the state slice managed by taskReducer
    // Other state slices and reducers go here if needed
  },
  middleware: [thunk],
  devTools: composeWithDevTools(),
});

export default store;
