import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

//Login

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data || "Something went wrong";
      return rejectWithValue(errorMessage); // Ensure error message is returned
    }
  }
);

// Seller Register
export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      const errorMessage = error.response?.data || "Something went wrong";
      return rejectWithValue(errorMessage); // Ensure error message is returned
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    message: "",
    errorMessage: "",
    isLoading: false,
    userInfo: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(seller_register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(seller_register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(seller_register.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // Admin Login
      .addCase(admin_login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(admin_login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(admin_login.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default authReducer.reducer;
