import React, { createContext, useEffect, useState } from "react";
import { GET_PROFILE_DETAILS } from "./query";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";

export const AuthContext = createContext({});

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token") || null;
    const userType = localStorage.getItem("userType") || null;
    const id = localStorage.getItem("id");

    if (token && userType && id) {
      setUser({ token, userType, id });
    }
  }, []);

  const { loading, error, data } = useQuery(GET_PROFILE_DETAILS, {
    client,
    onCompleted: (data) => {
      setUser((prev) => ({ ...prev, ...data.profileDetails }));
    },
  });

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
