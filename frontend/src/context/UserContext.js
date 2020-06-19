import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const [posts, setPosts] = useState([]);

  const [post, setPost] = useState([]);
  return (
    <UserContext.Provider
      value={{
        posts,
        setPosts,
        post,
        setPost,
        user,
        setUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
