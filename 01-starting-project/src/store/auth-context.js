import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: token => {},
  logout: () => {},
});

export const AuthContextProvider = props => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token; // convert a truthy or falsy value to true or false value => !!token: if token is empty, !!token is false, if token hs value, !!token is true.

  const loginHandler = token => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
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
