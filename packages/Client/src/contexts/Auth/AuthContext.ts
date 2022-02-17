import { createContext } from 'react';

type User = {
  _id: string;
  username: string;
  name: string;
  email: string;
}

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);