import React from "react";

interface Props {
  article: Blog;
}

const ArticleComponent: React.FC<Props> = ({ article }) => {
  return <div>Hello Wolrd {article.title}</div>;
};

export default ArticleComponent;
