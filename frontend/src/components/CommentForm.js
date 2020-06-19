import React, { useEffect, useState } from "react";

import { StyledComment } from "../styles/styled";

import api from "../services/api";

const Comment = ({ post }) => {
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState({});
  const [formComment, setFormComment] = useState({
    // id: null,
    msg: "",
  });

  const handleChange = (e) => {
    setFormComment({
      ...formComment,
      [e.target.name]: e.target.value,
    });
  };

  const clearFields = () => {
    setFormComment({
      msg: "",
    });
  };

  const handleSubmit = async (e, post) => {
    e.preventDefault();

    console.log("post in comment: ", post);
    const id = post._id;
    console.log("post id in Comment: ", id);
    const newComment = {
      msg: formComment.msg,
      postId: id,
    };

    console.log("newComment: ", newComment);
    post.active = true;

    const res = await api.post("/api/comment", newComment);
    console.log("res comment: ", res);
  };

  //   useEffect(() => {
  //     //Get data of localstorage
  //     const commentStorage = JSON.parse(localStorage.getItem("comment"));
  //     console.log("CommentStorage: ", commentStorage);
  //     setComment(commentStorage);
  //   }, []);
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e, post)}>
        <input
          name="msg"
          type="text"
          onChange={handleChange}
          value={formComment.msg}
          placeholder="Adicione um comentário..."
        />
        <button type="submit">Publicar</button>
      </form>
    </>
  );
};

export default Comment;
