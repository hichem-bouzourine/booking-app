import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "./authService";

const user = JSON.parse(localStorage.getItem("user"));

export const loginUser = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    return await login(user);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user,
    loading: false,
    error: false,
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
    },
    logOut: (state, action) => {
      localStorage.removeItem("user");
      state.user = null;
      state.loading = false;
      state.error = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.user = null;
      });
  },
});

export const { logOut, reset } = authSlice.actions;
export default authSlice.reducer;
