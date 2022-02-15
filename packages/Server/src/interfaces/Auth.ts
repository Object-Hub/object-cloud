export interface IPasswordRequest {
  oldPassword?: string;
  newPassword: string;
  confirmPassword?: string;
}

export interface IForgotPassword {
  email: string;
  newPassword?: string;
}
