import React, { Fragment } from "react";

import Login from "./components/LoginPage";
import Register from "./components/Register";
import Post from "./components/Post";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import defaultTheme from "./styles/theme/default";

//User context
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <Fragment>
      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
          <Router>
            <Route path="/" component={Navbar} />
            <Route exact path="/list" component={PostList} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/user" component={Profile} />
            <Route exact path="/edituser" component={EditProfile} />
            <Switch>
              <Route exact path="/new" component={AddPost} />
              {/* <Route exact path="/list" component={PostList} /> */}
            </Switch>
          </Router>
        </UserProvider>
        <GlobalStyle />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
