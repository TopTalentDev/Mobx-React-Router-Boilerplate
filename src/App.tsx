import { navigate } from "@reach/router";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { usePrevious, useStore } from "./helpers/helpers";
import Routes from "./routes/all";

const App: React.FC = observer(props => {
  const rootStore = useStore();
  const { userStore } = rootStore;
  const { isAuthorized, hasCheckedAuth } = userStore;

  const prevAuthorized = usePrevious(isAuthorized);

  useEffect(() => {
    console.log("Use effect.");
    if (!hasCheckedAuth) {
      userStore.checkLogin();
    } else {
      console.log("Has checked login before.");
      if (!prevAuthorized && isAuthorized) {
        console.log("LOGGED IN!");
        navigate("/");
      } else if (!isAuthorized && prevAuthorized) {
        console.log("LOGGED OUT");
        navigate("/login");
      }
    }
  }, [prevAuthorized, isAuthorized, hasCheckedAuth, userStore]);

  return (
    <div>
      <Routes />
    </div>
  );
});

export default App;
