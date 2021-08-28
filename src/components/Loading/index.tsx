import { Theme } from "@material-ui/core";
import { createStyles, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import loadingAnimation from "../../assests/loading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const LoadingComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <FadeIn>
        <Lottie options={defaultOptions} height="20rem" width="20rem" />
      </FadeIn>
    </div>
  );
};

export default LoadingComponent;
