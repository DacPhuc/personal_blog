import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
  );
}

export default App;
