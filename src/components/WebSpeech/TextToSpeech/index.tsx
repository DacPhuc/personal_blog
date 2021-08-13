import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import TextToSpeechService from "./TextToSpeechService";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputStyle: {
      width: "90%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    buttonStyle: {
      width: "50%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);

const TextToSpeech: React.FC = () => {
  const styles = useStyles();
  const [text, setText] = useState("Hi my friends");

  const speechSynthesis = useMemo(() => new TextToSpeechService(), []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const TextToSpeechFunction = () => {
    if (speechSynthesis.isSpeaking) {
      speechSynthesis.abortCurrentSpeak();
    }

    speechSynthesis.speak(text);
  };

  return (
    <>
      <Wrapper>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          onChange={handleChange}
          value={text}
          className={styles.inputStyle}
        />
      </Wrapper>
      <Wrapper>
        <Button
          className={styles.buttonStyle}
          variant="contained"
          color="secondary"
          size="large"
          onClick={TextToSpeechFunction}
        >
          Read
        </Button>
      </Wrapper>
    </>
  );
};

export default TextToSpeech;
