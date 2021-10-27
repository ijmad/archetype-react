import React from "react";
import { Helmet } from "react-helmet";
import Nav from "/src/components/Nav";
import { StyledTitle, StyledContainer } from "./styles";

function Layout({ title, children }) {
  const fullTitle = "Hello World" + (title ? ` - ${title}` : "");

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>

      <StyledTitle>{fullTitle}</StyledTitle>

      <Nav />

      <StyledContainer>{children}</StyledContainer>
    </>
  );
}

export default Layout;
