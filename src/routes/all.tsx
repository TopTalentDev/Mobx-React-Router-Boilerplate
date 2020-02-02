import React from "react";
import { Router } from "@reach/router";
import { TodoList } from "../pages/TodoList";
import { TodoNew } from "../pages/TodoNew";
import { Login } from "../pages/Login";
import { PublicRoute, PrivateRoute } from "./helpers";

const Routes = () => {
  return (
    <Router>
      <PrivateRoute component={TodoList} path="/" />
      <PrivateRoute component={TodoNew} path="new" />
      <PublicRoute default component={Login} path="login" />
    </Router>
  );
};

export default Routes;
