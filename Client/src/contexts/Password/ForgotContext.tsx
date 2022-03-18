import { createContext } from "react";

export type EmailForgot = {
  email: string;
}

export type ForgotContextType = {
  email: EmailForgot | null;
}

export const ForgotContext = createContext({} as ForgotContextType);