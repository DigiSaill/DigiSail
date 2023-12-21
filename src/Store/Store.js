import { configureStore } from "@reduxjs/toolkit";
import loginSliceReducer from "./Storeslice";
export const store = configureStore({
  reducer: {
    loginUser: loginSliceReducer,
  },
});
