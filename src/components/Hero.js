import React from "react";
import styled from "styled-components";
import { AWlogo } from "../assets/AWlogo";

const Wrapper = styled.div`
  background-color: #505167;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 75vw;
  height: auto;

  .AWlogo {
    fill: #a9c01b;
  }
`;

const Hero = () => (
  <Wrapper>
    <header className="hero">
      <ImgContainer>
        <AWlogo />
      </ImgContainer>
    </header>
  </Wrapper>
);

export default Hero;
