import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../data/types";

const userInitialState: UserState = {
  name: "",

  isCommunittyAdmin: false,
  id: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<UserState>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
    }),
  },
});

export const loginReducer = authSlice.reducer;
export const { loginUser: loginActionCreator } = authSlice.actions;
