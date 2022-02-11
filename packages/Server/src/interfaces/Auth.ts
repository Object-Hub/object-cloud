export default interface IPasswordRequest {
	oldPassword?: string;
	newPassword: string;
	confirmPassword: string;
}
