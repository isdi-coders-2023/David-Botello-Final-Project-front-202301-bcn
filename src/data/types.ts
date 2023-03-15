export interface UserState extends CustomTokenPayload {}
export interface UserCredentials {
  username: string;
  password: string;
}
export interface LoginResponse {
  token: string;
}
export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}
export interface CustomTokenPayload extends LoginResponse {
  id: string;
  name: string;
  isCommunittyAdmin: true | false;
}
