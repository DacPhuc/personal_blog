import { Route, Switch } from "react-router-dom";
import loadable from "@loadable/component";
import "./App.css";

const Main = loadable(() => import("./components/Main"));
const Blog = loadable(() => import("./components/Resume"));
const Header = loadable(() => import("./components/Header"));
const Resume = loadable(() => import("./components/Resume"));
const WebSpeechAPI = loadable(() => import("./components/WebSpeech"));
const NotFound = loadable(() => import("./components/NotFound/NotFound"));

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route path="/resume" component={Resume} />
        <Route path="/web-speech-api" component={WebSpeechAPI} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
