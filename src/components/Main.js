import logo from "../logo.svg";
import Anime, { anime } from "react-anime";
import React from "react";

export default class Main extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-first">Hello</div>
        <div className="App-first">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
              <p>Hi there! I'm DaPu 👋</p>
            </Anime>
          </div>
          <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
            <div className="App-hashtag">
              <p>I ...</p>
              <p>#Eat</p>
              <p>#Code</p>
              <p>#Love</p>
            </div>
          </Anime>
        </div>
        <div className="App-first">
          <p>HELLO</p>
        </div>
      </div>
    );
  }
}
