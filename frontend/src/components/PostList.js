import React, { useState, useContext, useEffect } from "react";

import Post from "./Post";
import { UserContext } from "../context/UserContext";
import api from "../services/api";

const PostList = () => {
  const { posts, setPosts } = useContext(UserContext);

  useEffect(() => {
    //get data of database

    // const res = api.get("/post");
    api
      .get("/api/post")
      .then((res) => {
        console.log("Res: ", res);
        return setPosts([...res.data]);
      })
      .catch((err) => console.log(err));
    // setPosts([...res]);
    // console.log("Res: ", res);
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
