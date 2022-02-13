export interface IUser {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt?: string;
}

export interface IUserRegister {
  username: string;
  name: string;
  email: string;
  password: string;
  panels: string[];
}

export interface IUserLogin {
  username?: string;
  email?: string;
  password: string;
}
