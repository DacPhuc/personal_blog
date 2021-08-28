import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";
import styled from "styled-components";

const MainPage = loadable(() => import("./components/MainPage"));
const Blog = loadable(() => import("./components/Blog"));
const MainLayout = loadable(() => import("./components/MainLayout"));
const Resume = loadable(() => import("./components/Resume"));
const WebSpeechAPI = loadable(() => import("./components/WebSpeech"));
const NotFound = loadable(() => import("./components/NotFound"));
const Notification = loadable(() => import("./components/Notification"));
const ArticleContent = loadable(() => import("./components/Article"));
const BlankLayout = loadable(() => import("./components/BlankLayout"));

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <>
      <Notification />
      <Router>
        <Switch>
          <Route path="/article">
            <BlankLayout>
              <Switch>
                <Route
                  exact
                  path="/article/:id/:slug"
                  component={ArticleContent}
                />
              </Switch>
            </BlankLayout>
          </Route>
          <Route>
            <MainLayout
              children={
                <Wrapper>
                  <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/blog" component={Blog} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/web-speech-api" component={WebSpeechAPI} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </Wrapper>
              }
            />
          </Route>
        </Switch>
      </Router>
      <div></div>
    </>
  );
};

export default App;
