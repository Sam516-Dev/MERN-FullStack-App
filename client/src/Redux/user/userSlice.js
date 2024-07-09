import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// Create a slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signstart: (state) => {
      state.loading = true;
    },
    signsuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signfailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { signstart, signsuccess, signfailure } = userSlice.actions;

export default userSlice.reducer;
