import logo from "../../logo.svg";
import Anime, { anime } from "react-anime";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import React from "react";

const Wrapper = styled.div`
  background-color: #282c34;
  display: flex;
  min-height: 80vh;
`;

const SubWrapper = styled.div`
  flex-grow: 1;
  min-height: 80vh;
`;

const Header = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const HashTag = styled.div`
  font-size: calc(10px + 2vmin);
  color: white;
  margin-left: 20px;
`;

const Main: React.FC = () => {
  return (
    <Wrapper className="wrapper">
      <Helmet title="Dapu" />
      <SubWrapper />
      <SubWrapper>
        <Header>
          <img src={logo} className="App-logo" alt="logo" />
          <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
            <p>Hi there! I'm DaPu 👋</p>
          </Anime>
        </Header>
        <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
          <HashTag>
            <p>I ...</p>
            <p>#Eat</p>
            <p>#Code</p>
            <p>#Love</p>
          </HashTag>
        </Anime>
      </SubWrapper>
      <SubWrapper />
    </Wrapper>
  );
};

export default Main;
