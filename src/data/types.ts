export interface User {
  id: string;
  name: string;
  isCommunittyAdmin: true | false;
}

export interface UserState extends User {
  isLogged: true | false;
  token: string;
}
