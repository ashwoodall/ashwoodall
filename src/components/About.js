import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 16px;

  p {
    text-align: left;
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    padding-top: 64px;
    justify-content: flex-start;
    margin: 0 32px;
    font-size: 24px;

    h1 {
      font-size: 64px;
    }
  }
`;

const ImgContainer = styled.div`
  display: inline-block;
  width: 48px;
  margin-top: 48px;
`;

const About = () => (
  <Wrapper>
    <h1>Hi, I'm Ash</h1>
    <p>
      Software engineer specializing in User Experience and Front-End
      development while making all kinds of cool things in Austin, TX.{" "}
    </p>
    <p>
      Please look around, check out my{" "}
      <a
        href="https://github.com/ashwoodall"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
      , my{" "}
      <a
        href="https://www.linkedin.com/in/ashwoodall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      , or feel free to <a href="#">contact me</a>. Don't hesitate to ask any
      questions, y'all.
    </p>
    <ImgContainer />{" "}
  </Wrapper>
);

export default About;
