import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
