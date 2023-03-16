import { CustomTokenPayload, UserState } from "./types";

export const userInitialState: UserState = {
  name: "",
  isCommunittyAdmin: false,
  id: "",
  token: "",
};

export const userAuthState: UserState = {
  name: "David",
  isCommunittyAdmin: true,
  id: "0123554498",
  token: "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref",
};

export const demoUser: UserState = {
  name: "David",
  isCommunittyAdmin: true,
  id: "0123554498",
  token: "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref",
};

export const mockTokenPayload: CustomTokenPayload = {
  name: "David",
  isCommunittyAdmin: true,
  id: "0123554498",
  token: "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref",
};

export const mockToken = "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref";
