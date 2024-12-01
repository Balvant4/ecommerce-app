import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info) => {
    console.log(info);
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loder: false,
    userInfo: "",
  },
  reducers: {}, // Add reducers if needed
  extraReducers: () => {}, // Add extraReducers if needed
});

export default authReducer.reducer; // Export only the reducer
