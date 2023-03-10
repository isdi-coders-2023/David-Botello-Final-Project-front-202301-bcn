import { demoUser, userInitialState } from "../../../data/mockdata";
import { authSlice, loginActionCreator } from "./authSlice";

describe("Given a authSlice", () => {
  describe("When it is invoked", () => {
    test("Then it should return the inicial state and its name should be 'auth'", () => {
      expect(authSlice.name).toBe("auth");

      const userState = authSlice.reducer(userInitialState, { type: "" });
      expect(userState).toStrictEqual(userInitialState);
    });
  });

  describe("When the auth reducer function is called", () => {
    test("Then it should return a user logged", () => {
      const userState = authSlice.reducer(
        userInitialState,
        loginActionCreator(demoUser)
      );

      expect(userState).toHaveProperty("isLogged", true);
    });
  });
});
