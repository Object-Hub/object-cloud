export interface IEmail {
  token: string;
  id: string;
}

export interface IChangeEmail {
  newEmail: string;
  username: string;
}

export interface IEmailRequest {
  id: string;
  name: string;
  email: string;
  token: string;
}
