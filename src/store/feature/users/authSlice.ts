import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../../data/types";

const userInitialState: UserState = {
  name: "",
  isLogged: false,
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
      isLogged: true,
    }),
  },
});

export const loginReducer = authSlice.reducer;
export const { loginUser: loginActionCreator } = authSlice.actions;
