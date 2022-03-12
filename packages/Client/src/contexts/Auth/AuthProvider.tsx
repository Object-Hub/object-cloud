import { AuthContext, User } from "./AuthContext";
import { useEffect, useState } from "react";
import api from "../../services/api";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps ) => {
  const [user, setUser] = useState<User | null>(null!);

  const signIn = async (email: string, password: string) => {

    const EmailOrUsername = email.includes("@") ? "email" : "username";

    const response = await api.post("/account/login", {
      [EmailOrUsername]: email,
      password,
    });

    const { token, user } = response.data

    localStorage.setItem('@ControlPanel', token);
    api.defaults.headers.common.authorization = `Bearer ${token}`
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('@ControlPanel');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      api.get("/account/profile").then((response) => {
        setUser(response.data.user);
      });
    }
  }, [])

    

  const signOut = () => {

  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  )
}