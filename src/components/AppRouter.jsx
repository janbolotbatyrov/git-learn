import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={PostIdPage} />
      <Route path="/error" component={Error} />
      <Redirect to="/error" />
    </Switch>
  );
};

export default AppRouter;
