import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginPayload, login } from "../../services/user";

interface UserState {
  userId?: number;
  loading: boolean;
  error: string;
}

const initialState: UserState = {
  userId: undefined,
  loading: false,
  error: "",
};

export const doLogin = createAsyncThunk(
  "user/login",
  async (userData: LoginPayload) => {
    const data = await login(userData);
    await localStorage.setItem("token", data.token);

    return data;
  }
);

export const userSlice = createSlice({
  initialState,
  name: "userData",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userId = action.payload.userId;
    });
    builder.addCase(doLogin.rejected, (state) => {
      state.loading = false;
      state.error = "Something went wrong";
    });
  },
});

export default userSlice.reducer;
