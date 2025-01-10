import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfoFromCookie = Cookies.get('userInfo');
    if (userInfoFromCookie) {
      setUser(JSON.parse(userInfoFromCookie));
    }
  }, []);

  const login = (userInfo) => {
    Cookies.set('userInfo', JSON.stringify(userInfo));
    setUser(userInfo);
  };

  const logout = () => {
    Cookies.remove('userInfo');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
