import { Schema } from 'mongoose';
import { IUser } from '../Interfaces/User';

export const userSchema = new Schema<IUser>({
  _id: String,
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: String, required: true },
  verifyEmail: { type: Boolean, default: false },
  admin: { type: Boolean, default: false },
  panels: Array,
  UserDiscord: {
    id: { type: Number, unique: true },
    tag: { type: String, unique: true },
    avatar: { type: String, unique: true },
  },
});
