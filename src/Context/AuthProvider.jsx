import React, { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const register = (name, email, password) => {
  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));
};

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setIsUserLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, isUserLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
