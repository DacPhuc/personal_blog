import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";

const MainPage = loadable(() => import("./components/MainPage"));
const Blog = loadable(() => import("./components/Resume"));
const Header = loadable(() => import("./components/Header"));
const Resume = loadable(() => import("./components/Resume"));
const WebSpeechAPI = loadable(() => import("./components/WebSpeech"));
const NotFound = loadable(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/web-speech-api" component={WebSpeechAPI} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
