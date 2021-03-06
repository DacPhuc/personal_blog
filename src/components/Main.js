import logo from "../logo.svg";
import Typography from "@material-ui/core/Typography";
import Anime, { anime } from "react-anime";
import React from "react";

export default class Main extends React.PureComponent {
  componentDidMount() {
    new Image().src = logo;
  }

  render() {
    return (
      <div className="App">
        <div className="App-first">Hello</div>
        <div className="App-first">
          <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Hi there! I'm DaPu 👋</p>
            </header>
            <div className="App-hashtag">
              <p>I ...</p>
              <p>#Eat</p>
              <p>#Code</p>
              <p>#Love</p>
            </div>
          </Anime>
        </div>
        <div className="App-first">
          <Typography className="App-hi" variant="h6">
            HELLO
          </Typography>
        </div>
      </div>
    );
  }
}
