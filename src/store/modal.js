import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  show: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal(state, action) {
      if (action.payload.type === "CLOSE_MODAL") {
        state.show = false;
      }
      if (action.payload.type === "OPEN_MODAL") {
        state.show = true;
        state.data = action.payload.data;
      }
    },
    // filterSelected(state, action) {},
    toReset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
