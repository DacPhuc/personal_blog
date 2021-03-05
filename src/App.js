import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Header from "./components/Header";
import NotFound from "./components/NotFound/NotFound";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/blog" component={Blog} />
        <Route path="/resume" component={Resume} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
