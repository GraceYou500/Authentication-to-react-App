import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token; // convert a truthy or falsy value to true or false value => !!token: if token is empty, !!token is false, if token hs value, !!token is true.

  const loginHandler = token => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
