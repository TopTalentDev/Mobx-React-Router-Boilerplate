import React from "react";
import { Header } from "../components/Header";

// Authenticated pages may be wrapped within this layout (for instance dashboard layout)
export const AuthenticatedLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <hr />
      <div>{children}</div>
    </div>
  );
};
