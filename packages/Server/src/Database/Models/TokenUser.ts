import { Schema } from 'mongoose';

export interface ITokenUser {
  _id: string;
  token: string;
  expireAt: number;
}

export const tokenUser = new Schema<ITokenUser>({
  _id: String,
  token: { type: String, default: undefined },
  expireAt: { type: Number, default: undefined },
});
