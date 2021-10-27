import React from "react";

import Layout from "src/components/Layout";
import Nav from "src/components/Nav";

function Main({ children }) {
  return (
    <Layout>
      <h1>Welcome</h1>
      <h2>
        <Nav />
      </h2>

      {children}
    </Layout>
  );
}

export default Main;
