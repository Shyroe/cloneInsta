import styled from "styled-components";

import { queries } from "./GlobalStyle";

export const Wrapper = styled.div`
  max-width: 1200rem;
  /* width: 90%; */
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 3px solid blue;
`;

//Btn Block
export const BtnBlock = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  font-size: 1.8rem;
  text-transform: capitalize;
  /* padding: 0.3rem 1.5rem; */
  border: none;
  background-color: ${(props) => props.variant};
  color: ${(props) => props.theme.gColors.greyLight1};
  cursor: pointer;
`;

export const StyledLoginArea = styled.section`
  width: 100%;
  height: 90vh;
  padding: 12vh 10vh;
  /* border: 3px solid orange; */
  display: flex;
  justify-content: center;
`;

export const StyledLoginContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 3px solid purple; */
  display: flex;
  flex-flow: column nowrap;
`;

export const StyledLoginForm = styled.div`
  width: inherit;
  height: auto;
  padding: 1.5rem 0;
  /* border: 3px solid red; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.greyDark1};
    margin-bottom: 2rem;
  }

  & form {
    /* border: 2px solid orange; */
    width: 50%;
    & [type="text"] {
      width: 100%;
      height: 4rem;
      border: none;
      border: 1px solid rgba(0, 0, 0, 0.5);
      margin-bottom: 1rem;
      padding: 1rem;
    }

    & div:nth-of-type(1) {
      width: 100%;
      margin-top: 1.5rem;
      padding: 1rem 0;
      /* border: 1px solid #555; */
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & hr {
        width: 100%;
        height: 0;
        /* background-color: rgba(0, 0, 0, 0.5); */
        color: rgba(0, 0, 0, 0.2);
      }

      & span {
        font-size: 1.5rem;
        color: ${(props) => props.theme.gColors.greyDark2};
        padding: 0 1rem;
      }
    }

    & div:nth-of-type(2) {
      width: 100%;
      padding: 3rem 0;
      margin-top: 1.5rem;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.15);

      & span {
        font-size: 1.5rem;

        & a {
          text-decoration: none;
          color: lightblue;
          font-weight: bold;
          font-size: 1.8rem;
        }
      }
    }

    & div:nth-of-type(3) {
      width: 100%;
      height: 13rem;
      margin-top: 1.5rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      /* border: 2px solid blue; */

      & span {
        font-size: 1.8rem;
      }

      & div {
        width: auto;
        display: flex;
        /* border: 2px solid red; */

        & img {
          width: 13rem;
          height: 6rem;
        }

        & img:first-child {
          margin-right: 2rem;
        }
      }
    }
  }
`;

// Register Form
export const StyledRegisterForm = styled.div`
  width: inherit;
  height: auto;
  padding: 1.5rem 0;
  /* border: 3px solid red; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & h1 {
    font-size: 4rem;
    color: ${(props) => props.theme.greyDark1};
    margin-bottom: 2rem;
  }

  & form {
    width: 50%;
    /* width: auto; */
    /* border: 2px solid orange; */
    & [type="text"] {
      width: 100%;
      height: 4rem;
      border: none;
      border: 1px solid rgba(0, 0, 0, 0.5);
      margin-bottom: 1rem;
      padding: 1rem;
    }

    & div:nth-of-type(1) {
      width: 100%;
      margin-top: 1.5rem;
      padding: 1rem 0;
      /* border: 1px solid #555; */
      text-align: center;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      & hr {
        width: 100%;
        height: 0;
        /* background-color: rgba(0, 0, 0, 0.5); */
        color: rgba(0, 0, 0, 0.2);
      }

      & span {
        font-size: 1.5rem;
        color: ${(props) => props.theme.gColors.greyDark2};
        padding: 0 1rem;
      }
    }

    & div:nth-of-type(2) {
      width: 100%;
      padding: 3rem 0;
      margin-top: 1.5rem;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.15);

      & span {
        font-size: 1.5rem;

        & a {
          text-decoration: none;
          color: lightblue;
          font-weight: bold;
          font-size: 1.8rem;
        }
      }
    }

    & div:nth-of-type(3) {
      width: 100%;
      height: 13rem;
      margin-top: 1.5rem;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      /* border: 2px solid blue; */

      & span {
        font-size: 1.8rem;
      }

      & div {
        width: auto;
        display: flex;
        /* border: 2px solid red; */

        & img {
          width: 13rem;
          height: 6rem;
        }

        & img:first-child {
          margin-right: 2rem;
        }
      }
    }
  }
`;

//Navbar
export const StyledNavbar = styled.nav`
  width: 100%;
  height: 8rem;
  margin-bottom: 5rem;
  /* border: 2px solid blue; */

  & ul {
    list-style: none;
    display: flex;
    width: inherit;
    margin: auto 0;
    padding: 0 1.5rem;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    /* height: inherit; */
    /* border: 2px solid green; */
    justify-content: space-between;
    align-items: center;

    & div:nth-of-type(1) {
      border: 1px solid rgba(0, 0, 0, 0.3);
      padding: 0.5rem 5rem;

      & svg {
        width: 1.2rem;
        height: 1.2rem;
        margin-right: 0.5rem;
      }

      & span {
        font-size: 1.5rem;
        color: ${(props) => props.theme.greyDark2};
      }
    }

    & div:nth-of-type(2) {
      & svg {
        width: 4rem;
        height: 4rem;
        fill: rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
      & svg:not(last-child) {
        margin-right: 1.5rem;
      }
    }
  }
`;

//Post
export const StyledPost = styled.article`
  width: 35vw;
  /* height: 40vh; */
  height: auto;
  /* border: 2px solid green; */
  border: 1px solid rgba(0, 0, 0, 0.2);

  & div:nth-of-type(1) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.8rem 1.2rem;

    & img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
    }

    & div:nth-of-type(1) {
      width: auto;
      /* border: 1px solid blue; */
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      font-size: 1rem;
      margin-right: auto;
    }

    & div:nth-of-type(2) {
      /* border: 2px solid orange; */
      font-size: 2.2rem;
      font-weight: bold;
      cursor: pointer;

      & button {
        border: none;
        background-color: transparent;
        display: inline-block;

        & svg {
          width: 2.5rem;
          height: 2.5rem;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        }

        & svg:first-child {
          margin-right: 1rem;
        }
      }
    }
  }

  & figure {
    width: inherit;
    border-bottom: 1.5rem;
    /* border: 2px solid purple; */

    & img {
      /* width: inherit; */
      width: 99%;

      height: auto;
      /* width: 5rem;
      height: 12rem; */
    }
  }
`;

//Post status
export const StyledPostStatus = styled.div`
  width: 90%;
  /* border: 2px solid orange; */
  margin: 0 auto;

  & div:nth-of-type(1) {
    width: 100%;
    /* border: 1px solid blue; */
    margin: 0;
    padding: 0;
    padding: 0.4rem 0;
    margin-bottom: 1rem;
    & button {
      border: none;

      & svg {
        width: 3rem;
        height: 3rem;
        cursor: pointer;
      }

      & svg:not(last-child) {
        margin-right: 1rem;
      }
    }

    & button:last-child {
      margin-left: auto;
    }
  }

  & div:nth-of-type(2) {
    & span:nth-of-type(1) {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.8rem;
    }

    & p {
      margin: 0.8rem 0;
      font-size: 1.3rem;
    }

    & span:nth-of-type(2) {
      font-size: 1.2rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.4);
      text-transform: uppercase;
    }
  }

  & form {
    margin-top: 1.5rem;
    width: 100%;
    padding: 1.5rem 0;
    /* border: 2px solid red; */
    display: flex;

    & [type="text"] {
      background-color: none;
      border: none;
      width: inherit;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
        font-size: 1.6rem;
      }
    }

    & button {
      border: none;
      font-size: 1.6rem;
      color: lightblue;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const StyledAddPost = styled.div`
  width: 40vw;
  height: auto;
  /* border: 2px solid orange; */
  & form {
    width: inherit;

    & [type="text"],
    & [type="file"] {
      width: inherit;
      height: 4rem;
      margin-bottom: 1rem;
      border: none;
      background-color: transparent;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(0, 0, 0, 0.1);

      &::placeholder {
        font-size: 1.4rem;
        color: ${(props) => props.theme.gColors.greyDark2};
      }
    }
  }
`;

//Comment
export const StyledComment = styled.div`
  width: 100%;
  display: flex;

  & h3 {
    font-weight: bold;
    font-size: 1.4rem;
    margin-right: 0.6rem;
  }

  & span {
    font-size: 1.4rem;
  }
`;

// Profile
export const StyledProfile = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.gColors.greyDark1};
  /* border: 1px solid red; */

  & img {
    width: 14rem;
    height: 14rem;
    margin-right: 1.5rem;
    border-radius: 50%;
  }

  & div:nth-of-type(1) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    & div:nth-of-type(1) {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: center;
      /* border: 1px solid orange; */
      color: inherit;

      & span {
        font-size: 1.8rem;
        margin-right: 2rem;
        text-transform: capitalize;
        color: inherit;
      }

      & button {
        width: 13rem;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        font-size: 1.6rem;
        padding: 0.5rem 1.5rem;
        border: none;
        background-color: #fff;
        border: 1px solid ${(props) => props.theme.gColors.greyDark1};
        border-radius: 0.5rem;
        cursor: pointer;
        color: inherit;

        &:hover {
          background-color: ${(props) => props.theme.gColors.greyDark1};
          color: #fff;
        }
      }
    }

    & div:nth-of-type(2) {
      display: flex;
      justify-content: flex-start;
      margin: 1rem 0;
      font-size: 1.6rem;

      & span {
        margin: 0 0.5rem;
      }
    }

    h4 {
      font-size: 1.7rem;
      font-weight: bold;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }

    p {
      font-size: 1.7rem;
    }
  }
`;

//Edit Profile
export const StyledEditProfile = styled.section`
  width: 40vw;
  height: auto;
  padding: 1rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* border: 2px solid orange; */
  & form {
    width: inherit;

    & label {
      font-size: 1.7rem;
      color: ${(props) => props.theme.gColors.greyDark2};
    }

    & [type="text"],
    & [type="file"] {
      width: inherit;
      height: 4rem;
      margin-bottom: 1rem;
      border: none;
      background-color: transparent;
      padding: 0.5rem 1rem;
      border: 1px solid rgba(0, 0, 0, 0.1);

      &::placeholder {
        font-size: 1.4rem;
        color: ${(props) => props.theme.gColors.greyDark2};
      }
    }
  }
`;

//Publications
export const StyledPublications = styled.section`
  width: 100%;
  border: 2px solid blue;
  display: flex;
  justify-content: flex-start;
  margin-right: 1.5rem;
  padding: 3rem 0;
`;
