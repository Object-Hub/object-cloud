import { createContext } from 'react';

export type User = {
    username: string;
    name: string;
    email: string;
}

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);