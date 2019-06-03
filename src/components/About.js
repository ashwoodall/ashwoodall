import React from "react";
import styled from "styled-components";
import { AWlogo } from "../assets/AWlogo";

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

  @keyframes ash {
  }
`;

const ImgContainer = styled.div`
  display: inline-block;
  width: 48px;
  margin-top: 48px;

  .AWlogo {
    fill: #a9c01b;
  }
`;

const About = () => (
  <Wrapper>
    <h1>Hi, I'm Ash</h1>
    <p>
      Or Ashley if you prefer. Front-end engineer making cool things in Austin,
      TX.{" "}
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
    <ImgContainer>
      <AWlogo />
    </ImgContainer>{" "}
  </Wrapper>
);

export default About;
