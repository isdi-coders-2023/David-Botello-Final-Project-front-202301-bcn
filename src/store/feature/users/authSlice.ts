import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../data/types";

const userInitialState: UserState = {
  name: "",
  isLogged: false,
  isCommunittyAdmin: false,
  id: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: userInitialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
      isCommunittyAdmin: true,
    }),
  },
});

export const loginReducer = authSlice.reducer;
export const { loginUser: loginActionCreator } = authSlice.actions;
