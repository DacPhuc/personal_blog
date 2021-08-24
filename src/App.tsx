import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";
import styled from "styled-components";

const MainPage = loadable(() => import("./components/MainPage"));
const Blog = loadable(() => import("./components/Blog"));
const Header = loadable(() => import("./components/Header"));
const Resume = loadable(() => import("./components/Resume"));
const WebSpeechAPI = loadable(() => import("./components/WebSpeech"));
const NotFound = loadable(() => import("./components/NotFound"));
const Notification = loadable(() => import("./components/Notification"));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <>
      <Notification />
      <div>
        <Header
          children={
            <Wrapper>
              <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/blog" component={Blog} />
                <Route path="/resume" component={Resume} />
                <Route path="/web-speech-api" component={WebSpeechAPI} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Wrapper>
          }
        />
      </div>
    </>
  );
};

export default App;
