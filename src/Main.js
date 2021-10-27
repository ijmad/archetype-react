import React from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

function Main({ children }) {
  return (
    <Layout>
      <h1>Welcome</h1>
      <h2>
        <Link to="/1">Page 1</Link>&nbsp;
        <Link to="/2">Page 2</Link>&nbsp;
      </h2>

      {children}
    </Layout>
  );
}

export default Main;
