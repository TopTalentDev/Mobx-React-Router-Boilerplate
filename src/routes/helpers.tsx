import React from "react";
import { useStore } from "../helpers/helpers";
import { AuthenticatedLayout } from "../layouts/authenticated";
import { Redirect } from "@reach/router";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const rootStore = useStore();
  const { userStore } = rootStore;
  const { isLoggedIn } = userStore;
  return (
    <div>
      {isLoggedIn ? (
        <AuthenticatedLayout>
          <Component {...rest} />
        </AuthenticatedLayout>
      ) : (
        <Redirect from="" to="/login" noThrow />
      )}
    </div>
  );
};

export const PublicRoute = ({ component: Component, ...rest }) => {
  return <Component {...rest} />;
};
