import { Link } from "@reach/router";
import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../helpers/helpers";

export const Header = observer(props => {
  const rootStore = useStore();
  const { userStore } = rootStore;

  return (
    <div>
      <div>Hello {userStore.name},</div>
      <br />
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New item</Link>
        </li>
        <li>
          <button onClick={() => userStore.logout()}>Log Out</button>
        </li>
      </nav>
    </div>
  );
});
