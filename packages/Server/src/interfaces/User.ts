export default interface IUserRequest {
	id: string;
	name: string;
	email: string;
	password: string;
	createdAt: string;
	updatedAt?: string;
}
