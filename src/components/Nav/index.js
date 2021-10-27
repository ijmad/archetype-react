import React from "react";
import { StyledLink, StyledNav } from "./styles";

function Nav() {
  return (
    <StyledNav>
      <StyledLink to="/1">Page 1</StyledLink>
      <StyledLink to="/2">Page 2</StyledLink>
    </StyledNav>
  );
}

export default Nav;
