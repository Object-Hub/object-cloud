import { Schema } from 'mongoose';

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

export const userSchema = new Schema<IUser>({
  _id: String,
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: String, required: true },
  verifyEmail: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  panels: Array,
  UserDiscord: {
    id: Number,
    tag: String,
    avatar: String,
  },
});
