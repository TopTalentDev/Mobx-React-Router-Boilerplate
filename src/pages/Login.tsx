import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { useStore } from "../helpers/helpers";

export const Login = observer(props => {
  const rootStore = useStore();
  const { userStore } = rootStore;
  const { isLoggedIn } = userStore;
  const [username, setUsername] = useState("");

  return (
    <div>
      {!isLoggedIn && <div>You need to login</div>}
      <label>Username</label>
      <input
        value={username}
        onChange={e => setUsername(e.target.value)}
      ></input>
      {!isLoggedIn && (
        <button
          onClick={() => {
            userStore.login(username);
          }}
        >
          Login
        </button>
      )}
      {isLoggedIn && (
        <button
          onClick={() => {
            userStore.logout();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
});
