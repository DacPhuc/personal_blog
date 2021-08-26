import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { NotionRenderer } from "react-notion-x";
import { useDispatch, useSelector } from "react-redux";
import { articleContentSelector, fetchArticleContent } from "./state";

type ArticleParams = {
  id: string;
  slug: string;
};

const ArticleContent: React.FC = () => {
  const { id, slug } = useParams<ArticleParams>();
  const dispatch = useDispatch();
  const articleContent = useSelector(articleContentSelector);

  useEffect(() => {
    dispatch(fetchArticleContent({ id, slug }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return articleContent ? (
    <div>
      <NotionRenderer
        recordMap={articleContent}
        fullPage={false}
        darkMode={false}
      />
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ArticleContent;
