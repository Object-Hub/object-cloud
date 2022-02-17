export interface IPasswordRequest {
  email?: string;
  username?: string;
  oldPassword?: string;
  newPassword: string;
}

export interface IForgotPassword {
  email: string;
  newPassword?: string;
}

export interface IForgotPasswordToken {
  token: string;
}
