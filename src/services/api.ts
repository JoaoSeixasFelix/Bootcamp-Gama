import axios from "axios";
import React from "react";
import { parseCookies } from "nookies";

const { "nextauth.token": token } = parseCookies();

export const api = axios.create({
  baseURL: "https://fidplus-backendv2.herokuapp.com",
});

if (token) {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
}
