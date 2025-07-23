/**
 * AuthContext manages the user's authentication state by storing a token,
 * It provides functions for the user to register, log in, and log out,
 * all of which update the token in state.
 */

import { createContext, useContext, useEffect, useState } from "react";

import { API } from "../api/ApiContext";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) return;

    const verify = async () => {
      const response = await fetch(API + "/users/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ jwt: token }),
      });
      const result = await response.json();
      if (!response.ok) {
        console.log("There was an issue processing the token.");
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
        return;
      }

      setUser(result);
    };

    verify();
  }, [token]);

  const register = async (credentials) => {
    const response = await fetch(API + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw result;
    setToken(result.token);
  };

  const login = async (credentials) => {
    const response = await fetch(API + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    if (!response.ok) throw result;

    localStorage.setItem("token", result);
    setToken(result);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const value = { user, token, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw Error("useAuth must be used within AuthProvider");
  return context;
}
