import { createContext, useEffect, useState } from "react";
import Router from "next/router";

import { api } from "../services/api";
import { parseCookies, setCookie } from "nookies";
import { AxiosResponse } from "axios";

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
  email?: string;
  password?: string;
  type?: string;
  id?: 0 | 1;
};

type AuthContextType = {
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    async function test() {
      const { "fidplus.token": token } = parseCookies();
      if (token) {
        const client: any = await api.get("/login/me");
        setUser(client);
        Router.push("/userhomepage");
      }
    }
    test();
  }, []);

  const signIn = async ({ email, password, type }: SignInData) => {
    if (type === "client") {
      const { token, client }: any = await api.post("/login/client", {
        email,
        password,
      });
      setUser(client);
      setCookie(undefined, "fidplus.token", token, {
        maxAge: 60 * 60 * 1, // 1 dia
      });
      Router.push("/userhome");
    } else {
      const { token, client }: any = await api.post("/login/restaurant", {
        email,
        password,
      });
      setUser(client);
      setCookie(undefined, "fidplus.token", token, {
        maxAge: 60 * 60 * 1, // 1 dia
      });
      Router.push("/userhome");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
