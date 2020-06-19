import React, { useState, useContext, useRef } from "react";

import { StyledAddPost, BtnBlock } from "../styles/styled";

import { useHistory } from "react-router-dom";

import axios from "axios";
import api from "../services/api";

import { UserContext } from "../context/UserContext";

import { v4 as uuid } from "uuid";

import Navbar from "./Navbar";

const AddPost = ({ post }) => {
  //Ref file
  const fileRef = useRef();
  let history = useHistory();
  const { setPosts, posts } = useContext(UserContext);

  const [formPost, setFormPost] = useState({
    // id: null,
    author: "",
    place: "",
    desc: "",
    hashtags: "",
    image: "",
  });

  const clearFields = () => {
    setFormPost({
      // id: null,
      author: "",
      place: "",
      desc: "",
      hashtags: "",
      image: "",
    });
  };

  const handleChange = (e) => {
    setFormPost({
      ...formPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const file = fileRef.current.files[0];
    const formData = new FormData();
    formData.append("file", fileRef.current.files[0]);
    formData.append("upload_preset", "shyroe");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/rank-digital/image/upload",
      formData
    );

    console.log("res", res);

    const receivedFile = await res.data;

    const newPost = {
      // id: uuid(),
      author: formPost.author,
      place: formPost.place,
      desc: formPost.desc,
      hashtags: formPost.hashtags,
      image: receivedFile.secure_url,
      // likes: 0,
    };

    console.log("newPost: ", newPost);

    //Send newPost to database
    const resPost = await api.post("/api/post", newPost);
    // api
    //   .post("/post", newPost)
    // axios
    //   .post("http://localhost:3000/post", newPost)
    //   .then((res) => {
    //     console.log("res Post: ", res);
    //     console.log("res Post Data: ", res.data);
    //   })
    //   .catch((err) => console.log(err));

    console.log("res Post: ", resPost);

    // setPosts((state) => [...state, newPost]);

    // console.log("Posts: ", posts);

    //Clear Fields
    clearFields();

    //Change route to list post
    history.push("/list");
  };
  return (
    <>
      <div className="uploadcontainer">
        <StyledAddPost>
          <form onSubmit={handleSubmit}>
            <input
              name="image"
              ref={fileRef}
              onChange={handleChange}
              value={formPost.image}
              type="file"
            />
            <input
              name="author"
              onChange={handleChange}
              value={formPost.author}
              type="text"
              placeholder="Autor do post"
            />
            <input
              name="place"
              onChange={handleChange}
              value={formPost.place}
              type="text"
              placeholder="Local do post"
            />
            <input
              name="desc"
              onChange={handleChange}
              value={formPost.desc}
              type="text"
              placeholder="Descrição do post"
            />
            <input
              name="hashtags"
              onChange={handleChange}
              value={formPost.hashtags}
              type="text"
              placeholder="Hashtags do post"
            />
            {/* <input type="submit" value="Enviar" /> */}
            <BtnBlock
              type="submit"
              width="100%"
              height="4rem"
              variant="lightblue"
            >
              Enviar
            </BtnBlock>
          </form>
        </StyledAddPost>
      </div>
    </>
  );
};

export default AddPost;
