import "./style.css";

const NotFound = () => {
  return (
    <div className="FourOhFour">
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
