import React from "react";
import styled from "styled-components";
import  Minime from "../assets/Minime.gif";
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

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    height: 123px;
    width: auto;
  }

  @media (min-width: 768px) {
    padding-top: 64px;
    justify-content: flex-start;
    margin: 0 32px;
    font-size: 32px;

    h1 {
      font-size: 64px;
    }
  }

  @media (min-width: 1024px) {
    max-width: 800px;
    text-align: center;
    margin: 0 auto;
  }
`;

const About = () => (
  <Wrapper>
    <div>

      <img src={Minime} alt="sprite" /><h1>Hi, I'm Ash</h1>

    </div>
    <p>
      Software engineer and code educator specializing in User Experience and
      Front-End development. Making all kinds of cool things in Austin, TX.
    </p>
    <p>
    Always looking to discuss new adventures, open source, SVG animation, 
    shih-tzus, and pizza opportunities.
    </p>
  </Wrapper>
);

export default About;
