import logo from "../logo.svg";
import "../App.css";
import Typography from "@material-ui/core/Typography";

const Main = () => {
  return (
    <div className="App">
      <Typography className="App-hi" variant="h6">
        HELLO
      </Typography>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first blog</p>
      </header>
    </div>
  );
};

export default Main;
