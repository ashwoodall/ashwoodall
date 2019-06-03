import React from "react";
import styled from "styled-components";
import { AWlogo } from "../assets/AWlogo";

const Wrapper = styled.div`
  background-color: #a9c01b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  width: 75vw;
  height: auto;

  .AWlogo {
    fill: #505167;
  }
`;

const Portfolio = () => (
  <Wrapper>
    <ImgContainer>
      <AWlogo />
    </ImgContainer>
  </Wrapper>
);

export default Portfolio;
