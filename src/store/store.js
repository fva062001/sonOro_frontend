import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal";

const store = configureStore({
  reducer: { modal: modalSlice },
});

export default store;
