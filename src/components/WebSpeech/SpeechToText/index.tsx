import { Button, LinearProgress, Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { ColorBox } from "./ColorBox";
import { SpeechToTextService } from "./SpeechToTextService";

const colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
  "crimson",
  "cyan",
  "fuchsia",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lime",
  "linen",
  "magenta",
  "maroon",
  "moccasin",
  "navy",
  "olive",
  "orange",
  "orchid",
  "peru",
  "pink",
  "plum",
  "purple",
  "red",
  "salmon",
  "sienna",
  "silver",
  "snow",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "white",
  "yellow",
  "chartreuse",
];

interface FuncProps {
  changeColor(color: string): void;
}

const Wrapper = styled.div`
  width: 100%;
`;

const ColorList = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonStyle: {
      width: "90%",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);

export const SpeechToText: React.FC<FuncProps> = (props) => {
  const classes = useStyles();
  const speechRecognition = useMemo(() => new SpeechToTextService(), []);
  const [isRecord, setIsRecord] = useState(false);
  const [result, setResult] = useState("");

  const startRecording = () => {
    speechRecognition.onResult((result, isFinal) => {
      if (isFinal) {
        setResult(result);
        props.changeColor(result);
        speechRecognition.stop();
      }
    });

    speechRecognition.onEnd(() => {
      setIsRecord(false);
    });

    speechRecognition.onStart(() => {
      setIsRecord(true);
    });

    speechRecognition.start();
  };

  return (
    <Wrapper>
      <ColorList>
        {colors.map((color, index) => {
          return <ColorBox key={index} code={color} />;
        })}
      </ColorList>
      <ButtonWrapper>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.buttonStyle}
          onClick={startRecording}
          disabled={isRecord}
        >
          Click here then say a color name above
        </Button>
      </ButtonWrapper>
      {isRecord && <LinearProgress />}
      {!isRecord && result.length > 0 && (
        <Typography variant="h6" component="h2">
          Do you mean {result}?
        </Typography>
      )}
    </Wrapper>
  );
};
