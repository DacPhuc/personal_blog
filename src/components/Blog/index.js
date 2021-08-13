import { Helmet } from "react-helmet";

export default function Blog() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dapu Blog</title>
        <meta
          name="description"
          content="Dapu blog, i write and share about everything"
        />
      </Helmet>
      <p>Hello World</p>
    </div>
  );
}
