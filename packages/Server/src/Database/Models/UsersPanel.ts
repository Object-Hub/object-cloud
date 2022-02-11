import { Schema } from 'mongoose';

interface IUserDiscord {
	id: number;
	tag: string;
	avatar: string;
}

export interface IUser {
	_id: string;
	name: string;
	email: string;
	password: string;
	UserDiscord: IUserDiscord;
	panels: Array<string>;
}

export const userSchema = new Schema<IUser>({
	_id: String,
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	panels: Array,
	UserDiscord: {
		id: { type: Number, required: true },
		tag: { type: String, required: true },
		avatar: { type: String, required: true },
	},
});
