import { createSlice } from "@reduxjs/toolkit";

// Define an initial state with explicit properties
const initialState = {
  initialSearchState: null, // You can use null or any other default value
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getData: (state, action) => {
      const { data } = action.payload;
      state.initialSearchState = data;
    },
  },
});

export const { getData } = loginSlice.actions;
export default loginSlice.reducer;
