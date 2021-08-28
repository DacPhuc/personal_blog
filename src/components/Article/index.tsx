import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingComponent from "../Loading";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { NotionRenderer } from "react-notion-x";
import { useDispatch, useSelector } from "react-redux";
import {
  articleContentSelector,
  fetchArticleContent,
  loadingContentSelector,
} from "./state";

type ArticleParams = {
  id: string;
  slug: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      boxSizing: "border-box",
    },
    notionContainer: {
      maxWidth: "100%",
    },
  })
);

const ArticleContent: React.FC = () => {
  const { id, slug } = useParams<ArticleParams>();
  const dispatch = useDispatch();
  const articleContent = useSelector(articleContentSelector);
  const loading = useSelector(loadingContentSelector);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchArticleContent({ id, slug }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.wrapper}>
      {loading ? (
        <LoadingComponent />
      ) : (
        <NotionRenderer
          recordMap={articleContent}
          darkMode={false}
          fullPage={true}
          className={classes.notionContainer}
        />
      )}
    </div>
  );
};

export default ArticleContent;
