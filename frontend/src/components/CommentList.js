import React, { useEffect, useState } from "react";

import Comment from "./Comment";
import api from "../services/api";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/api/comment");
      console.log("res Comment: ", res);
      setComments([...res.data]);
    };
    fetchData();
  }, []);
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
