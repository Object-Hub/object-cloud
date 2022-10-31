import { Schema } from 'mongoose';
import { ITokenUser } from '../Interfaces/Token';

export const tokenUser = new Schema<ITokenUser>({
  _id: String,
  token: { type: String, default: undefined },
  expireAt: { type: Number, default: undefined },
});
