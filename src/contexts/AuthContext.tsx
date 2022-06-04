import { createContext, useEffect, useState } from "react";
import Router from "next/router";

import { api } from "../services/api";
import { parseCookies, setCookie } from "nookies";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  type: number;
  img_url: string;
  createdAt: string;
  updatedAt: string;
};

type SignInData = {
  email: string;
  password: string;
  id?: 0 | 1;
};

type AuthContextType = {
  user: User | null;
  signIn?: (data: SignInData) => Promise<void>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { "fidplus.token": token } = parseCookies();
    if (token) {
      //Recover info passing token to backend
    }
  }, []);

  // const signIn = async ({email ,password}: SignInData) => {
  //     const {token, client} = await api.get("/login/client", {
  //       email,
  //       password,
  //     })
  //     setCookie(undefined, 'fidplus.token',token, {
  //       maxAge: 60 * 60 * 24 // 1 dia
  //     })

  //     setUser(client)

  //     Router.push('/userhomepage')

  // }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
