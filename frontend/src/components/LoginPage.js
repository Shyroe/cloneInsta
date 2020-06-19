import React, { useState, useContext } from "react";

import {
  StyledLoginArea,
  StyledLoginContainer,
  StyledLoginForm,
  BtnBlock,
} from "../styles/styled";

import { useHistory } from "react-router-dom";
import { login, logout } from "../services/auth";
import api from "../services/api";

//Context User
import { UserContext } from "../context/UserContext";

import instaMock from "../images/instagram-mock.png";
import imgApple from "../images/instagram-apple.png";
import imgAndroid from "../images/instagram-android.png";

const LoginPage = (props) => {
  let history = useHistory();
  const { setUser, user } = useContext(UserContext);

  const [formSignin, setFormSignin] = useState({
    email: "",
    password: "",
  });

  //Signin
  const handleChangeSignin = (e) => {
    setFormSignin({
      ...formSignin,
      [e.target.name]: e.target.value,
    });
  };

  const clearFields = () => {
    setFormSignin({
      email: "",
      password: "",
    });
  };

  const handleSubmitSignin = async (e) => {
    e.preventDefault();

    const { email, password } = formSignin;
    if (!email || !password) {
      console.log("Preencha todos os dados");
    } else {
      try {
        const res = await api.post(
          "/auth/signin",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        //Remover token antigo
        logout();

        //Login add token
        login(res.data.token);
        console.log("Res Signin: ", res);
        const token = res.data.token;
        console.log("Token Signin: ", token);
        console.log("User Logged: ", res.data.user);

        //clear fields
        clearFields();

        history.push("/user");
      } catch (err) {
        console.log(err);
        console.log("Ocorreu um erro com o login. T.T");
      }
    }
  };
  return (
    <div className="area">
      <StyledLoginArea>
        <img src={instaMock} alt="img mock" />
        <StyledLoginContainer>
          <StyledLoginForm>
            <>
              <h1>Instagram</h1>
              <form onSubmit={handleSubmitSignin}>
                <input
                  name="email"
                  onChange={handleChangeSignin}
                  value={formSignin.email}
                  type="text"
                  placeholder="Email"
                />
                <input
                  name="password"
                  onChange={handleChangeSignin}
                  value={formSignin.password}
                  type="text"
                  placeholder="Senha"
                />
                <BtnBlock width="100%" height="4rem" variant="lightblue">
                  Entrar
                </BtnBlock>
                <div>
                  <hr />
                  <span>OU</span>
                  <hr />
                </div>
                <div>
                  <span>
                    Não tem uma conta? <a href="#">Cadastre-se</a>{" "}
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
          </StyledLoginForm>
        </StyledLoginContainer>
      </StyledLoginArea>
    </div>
  );
};

export default LoginPage;
