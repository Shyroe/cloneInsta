import React, { useEffect, useState } from "react";

import { StyledComment } from "../styles/styled";

import api from "../services/api";

const Comment = ({ comment }) => {
  // const [comments, setComments] = useState([]);

  // const [comment, setComment] = useState({});

  // useEffect(() => {
  //   //Get data of localstorage
  //   const commentStorage = JSON.parse(localStorage.getItem("comment"));
  //   console.log("CommentStorage: ", commentStorage);
  //   setComment(commentStorage);
  // }, []);
  return (    
    <ul>
      <StyledComment>
        <h3> {comment.creator} </h3>
        <span> {comment.msg}</span>
      </StyledComment>
    </ul>
  );
};

export default Comment;
