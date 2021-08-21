import React from "react";
import "./style.css";
import Helmet from "react-helmet";

const NotFound = () => {
  return (
    <div className="FourOhFour">
      <Helmet title="404" />
      <div
        className="bg"
        style={{
          backgroundImage:
            "url(https://media.giphy.com/media/l0HUjDphISoMMCMPm/giphy.gif)",
        }}
      ></div>
      <div className="code">404</div>
    </div>
  );
};

export default NotFound;
