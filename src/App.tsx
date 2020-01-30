import React from "react";
import { TodoList } from "./pages/TodoList";
import { TodoNew } from "./pages/TodoNew";
import { Router, Link, RouteComponentProps } from "@reach/router";

let Home = (_: RouteComponentProps) => <div>Home is where you start</div>;

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="list">List</Link> |{" "}
        <Link to="new">New</Link>
      </nav>
      <Router>
        <Home path="/" />
        <TodoNew path="new" />
        <TodoList path="list" />
      </Router>
    </div>
  );
};

export default App;
