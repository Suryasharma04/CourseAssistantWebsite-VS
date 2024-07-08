import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, onLogin: handleLogin, onLogout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
