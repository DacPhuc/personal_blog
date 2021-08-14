import React, { useState } from "react";
import { Header } from "./Header";
import styled from "styled-components";
import { SpeechToText } from "./SpeechToText";
import TextToSpeech from "./TextToSpeech";
import Helmet from "react-helmet";

interface Props {
  bgColor: string;
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
`;

const SpeechToTextWrapper = styled.div<Props>`
  flex: 1;
  height: 100vh;
  border-right: 2px solid black;
  background: ${(props) => props.bgColor};
`;

const TextToSpeechWrapper = styled.div`
  flex: 1;
  height: 100vh;
`;

const App: React.FC = () => {
  const [color, setColor] = useState("white");

  return (
    <Wrapper>
      <Helmet title="Dapu Web Speech API" />
      <SpeechToTextWrapper bgColor={color}>
        <Header name={"Speech To Text"} />
        <SpeechToText changeColor={(value) => setColor(value)} />
      </SpeechToTextWrapper>
      <TextToSpeechWrapper>
        <Header name={"Text To Speech"} />
        <TextToSpeech />
      </TextToSpeechWrapper>
    </Wrapper>
  );
};

export default App;
