import { UserState } from "./types";

export const userInitialState: UserState = {
  name: "",
  isLogged: false,
  isCommunittyAdmin: false,
  id: "",
  token: "",
};

export const userAuthState: UserState = {
  name: "David",
  isLogged: true,
  isCommunittyAdmin: true,
  id: "0123554498",
  token: "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref",
};

export const demoUser: UserState = {
  name: "David",
  isLogged: true,
  isCommunittyAdmin: true,
  id: "0123554498",
  token: "adñsljhifhq¡0ASFRRE·F4u&%0@#3finvcfref",
};
