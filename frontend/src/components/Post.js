import React, { useRef, useState } from "react";

import {
  StyledNavbar,
  StyledPost,
  StyledPostStatus,
  StyledComment,
} from "../styles/styled";

import { v4 as uuid } from "uuid";

import api from "../services/api";

import Comment from "./Comment";
import Navbar from "./Navbar";
import CommentList from "./CommentList";
// import logo from "../images/instagram-title.png";
import { FiMessageCircle, FiBookmark, FiHeart } from "react-icons/fi";
import { MdEdit, MdDelete } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

import avatar from "../images/avatar1.png";

import CommentForm from "./CommentForm";

const Post = ({ post }) => {
  const likesRef = useRef();
  // const postRef = useRef();

  // const incrementLike = (e) => {
  //   console.log("post: ", post);
  //   console.log("target: ", e.target);
  //   e.target.style.fill = "red";
  //   //change posts
  //   post.likes += 1;

  //   console.log("likes span: ", likesRef.current);

  //   // change span
  //   likesRef.current.innerHTML = `${post.likes} curtidas`;
  //   // return (post.likes += 1);
  // };
  return (
    <div className="area">
      <StyledPost>
        <div>
          <img src={avatar} alt="" />
          <div>
            <span>{post.author}</span>
            <span>{post.place} </span>
          </div>
          <div>
            {/* <span>...</span> */}
            <button>
              <MdEdit style={{ color: "green" }} />
            </button>
            <button>
              <MdDelete
                onClick={() => deletePost(post._id)}
                style={{ color: "red" }}
              />
            </button>
          </div>
        </div>
        <figure>
          <img src={post.image} alt="" />
        </figure>
        <StyledPostStatus>
          <div>
            <button>
              <FiHeart />
            </button>
            <button>
              <FiMessageCircle />
            </button>
            {/* <button>
              <FaTelegramPlane />
            </button> */}
            <button>
              <FiBookmark />
            </button>
          </div>
          <div>
            <span ref={likesRef}>{post.likes} curtidas</span>
            <p>{post.desc}</p>
            {/* <span>Ha 2 Dias</span> */}
            <span>{post.hashtags}</span>
          </div>
          <CommentForm post={post} />
        </StyledPostStatus>
        {post.active && <CommentList />}
        {/* <>
          {comments.length > 0 ? (
            <>
              {comments.map((comment) => {
                return (
                  <ul key={comment.id}>
                    <StyledComment>
                      <h3>user: </h3>
                      <span> {comment.msg}</span>
                    </StyledComment>
                  </ul>
                );
              })}
            </>
          ) : null}
        </> */}
      </StyledPost>
    </div>
  );
};

export default Post;
