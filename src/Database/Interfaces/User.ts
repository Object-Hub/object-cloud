interface IUserDiscord {
  id: number;
  tag: string;
  avatar: string;
}

export interface IUser {
  _id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  UserDiscord?: IUserDiscord;
  panels?: Array<string>;
  createdAt: string;
  updatedAt?: string;
  verifyEmail: boolean;
  admin: boolean;
}
