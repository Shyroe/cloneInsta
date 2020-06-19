import React, { useState, useContext } from "react";

import {
  StyledLoginArea,
  StyledLoginContainer,
  StyledRegisterForm,
  BtnBlock,
} from "../styles/styled";

import { useHistory } from "react-router-dom";

import api from "../services/api";

import { UserContext } from "../context/UserContext";

import instaMock from "../images/instagram-mock.png";
import imgApple from "../images/instagram-apple.png";
import imgAndroid from "../images/instagram-android.png";
import avatar from "../images/avatar1.png";

const Register = (props) => {
  //History
  let history = useHistory();

  //User context
  const { users, setUsers } = useContext(UserContext);

  const [formSignup, setFormSignup] = useState({
    id: null,
    name: "",
    email: "",
    username: "",
    bio: "",
    avatar: "",
    password: "",
  });

  const clearFields = () => {
    setFormSignup({
      id: null,
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };

  const handleChangeSignup = (e) => {
    setFormSignup({
      ...formSignup,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, username, bio, avatar } = formSignup;

    const newUser = {
      name,
      email,
      username,
      bio,
      avatar,
      password,
    };

    console.log("New User Register: ", newUser);

    if (!name || !email || !username || !password) {
      console.log("Preencha todos os dados");
    } else {
      try {
        const res = await api.post(
          "/auth/signup",
          { name, email, username, bio, avatar, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //funcionando
        // const res = await axios.post(
        //   "http://localhost:3000/signup",
        //   { name, email, password },
        //   {
        //     headers: {
        //       "Content-Type": "application/json"
        //     }
        //   }
        // );

        console.log("Res: ", res);
        const token = res.data.token;
        console.log("Token: ", token);
        //Sent tokent to localStorage

        //Change user
        // setUsers((state) => [...state, res.data]);

        //clear fields
        clearFields();

        history.push("/signin");
      } catch (err) {
        console.log(err);
        console.log("Ocorreu um erro ao registrar sua conta. T.T");
      }
    }
  };

  return (
    <div className="area">
      <StyledLoginArea>
        <img src={instaMock} alt="img mock" />
        <StyledLoginContainer>
          <StyledRegisterForm>
            <>
              <h1>Instagram</h1>
              <form onSubmit={handleSubmitSignup}>
                <input
                  type="text"
                  name="email"
                  onChange={handleChangeSignup}
                  placeholder="Email"
                />
                <input
                  type="text"
                  name="name"
                  onChange={handleChangeSignup}
                  placeholder="Nome completo"
                />
                <input
                  type="text"
                  name="username"
                  onChange={handleChangeSignup}
                  placeholder="Nome de usuário"
                />
                <input
                  type="text"
                  name="password"
                  onChange={handleChangeSignup}
                  placeholder="Senha"
                />
                <BtnBlock
                  type="submit"
                  width="100%"
                  height="4rem"
                  variant="lightblue"
                >
                  Cadastre-se
                </BtnBlock>
                <div>
                  <hr />
                  <span>OU</span>
                  <hr />
                </div>
                <div>
                  <span>
                    Tem uma conta? <a href="#">Conecte-se</a>{" "}
                  </span>
                </div>
                <div>
                  <span>Obtenha o aplicativo</span>
                  <div>
                    <img src={imgApple} alt="img apple" />
                    <img src={imgAndroid} alt="img android" />
                  </div>
                </div>
              </form>
            </>
          </StyledRegisterForm>
        </StyledLoginContainer>
      </StyledLoginArea>
    </div>
  );
};

export default Register;
