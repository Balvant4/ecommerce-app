import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      console.log(data);
      localStorage.setItem("accessToken", data.message.token);

      return data; // Pass data to the fulfilled case
    } catch (error) {
      return rejectWithValue(error.response.data); // Pass error to the rejected case
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(admin_login.pending, (state) => {
        state.loader = true; // Start loader
        state.errorMessage = ""; // Clear previous errors
      })
      .addCase(admin_login.fulfilled, (state, { payload }) => {
        state.loader = false; // Stop loader
        state.userInfo = payload; // Store user info if needed
        state.successMessage = "Login successful!"; // Optional success message
      })
      .addCase(admin_login.rejected, (state, { payload }) => {
        state.loader = false; // Stop loader
        state.errorMessage = payload?.error || "Invalid Password!";
      });
  },
});

export default authReducer.reducer;
