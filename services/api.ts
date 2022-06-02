import axios from "axios";
import React from "react";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();

export const api = axios.create({
  baseURL: "",
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
