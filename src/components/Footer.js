import React from "react";
import styled from "styled-components";

import githubLogo from "../assets/githubLogo.svg";
import codepenLogo from "../assets/codepenLogo.svg";
import twitterLogo from "../assets/twitterLogo.svg";
import linkedinLogo from "../assets/linkedinLogo.svg";

const FooterContainer = styled.div`
  background-color: #505167;
  height: 54px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  a {
    cursor: pointer;
  }

  img {
    height: 32px;
    padding: 4px 8px;
  }

  @media (min-width: 768px) {
    height: 64px;

    img {
      height: 40px;
      padding: 4px 16px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none !important;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledLink
        href="https://github.com/ashwoodall"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={githubLogo} alt="github logo" />
      </StyledLink>
      <a
        href="https://www.linkedin.com/in/ashwoodall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinLogo} alt="codepen logo" />
      </a>
      <a
        href="https://codepen.io/ashwoodall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={codepenLogo} alt="codepen logo" />
      </a>
      <a
        href="https://twitter.com/ashwdlclrk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitterLogo} alt="twitter logo" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
