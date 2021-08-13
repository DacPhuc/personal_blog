import { Helmet } from "react-helmet";

export default function Resume() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dapu Resume</title>
        <meta
          name="description"
          content="This is my resume, feel free to contact me"
        />
      </Helmet>
      <p>Hello World</p>
    </div>
  );
}
