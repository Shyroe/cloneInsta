import React, { useEffect, useState, useContext } from "react";

import avatar from "../images/avatar1.png";

import { UserContext } from "../context/UserContext";
import api from "../services/api";

import { StyledProfile } from "../styles/styled";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log("User Profile: ", user);
  // useEffect(() => {
  //   console.log("Init");
  //   const fetchData = async () => {
  //     const userProfile = await api.get("/auth/user");
  //     console.log("teste");
  //     console.log("User profile: ", userProfile);
  //     setUser(userProfile.data);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    console.log("Init");
    api
      .get("/auth/user")
      .then((res) => {
        // console.log("teste");
        // console.log("User profile: ", res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="area">
      <StyledProfile>
        <img src={avatar} alt="" />
        <div>
          <div>
            <span>{user.username}</span>
            <button>Editar Perfil</button>
          </div>
          <div>
            <span>
              <strong>1</strong> posts
            </span>
            <span>
              <strong>10</strong> followers
            </span>
            <span>
              <strong>3</strong> following
            </span>
          </div>
          <h4>{user.name}</h4>
          <p>
            {/* Programador front-end especializado no design e programação de
            projeto para a internet */}
            {user.bio}
          </p>
        </div>
      </StyledProfile>
    </div>
  );
};

export default Profile;
