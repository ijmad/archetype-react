import React from "react";
import { Helmet } from "react-helmet";

function Layout({ title, children }) {
  return (
    <>
      <Helmet>
        <title>Hello World {title ? ` - ${title}` : ""}</title>
      </Helmet>
      {children}
    </>
  );
}

export default Layout;
