import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { NotionRenderer } from "react-notion-x";
import { useDispatch, useSelector } from "react-redux";
import { articleContentSelector, fetchArticleContent } from "./state";

type ArticleParams = {
  id: string;
  slug: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: "100%",
    },
    notionContainer: {
      maxWidth: "100vw",
    },
  })
);

const ArticleContent: React.FC = () => {
  const { id, slug } = useParams<ArticleParams>();
  const dispatch = useDispatch();
  const articleContent = useSelector(articleContentSelector);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchArticleContent({ id, slug }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return articleContent ? (
    <div className={classes.wrapper}>
      <NotionRenderer
        recordMap={articleContent}
        fullPage={true}
        darkMode={false}
        className={classes.notionContainer}
      />
    </div>
  ) : (
    <CircularProgress />
  );
};

export default ArticleContent;
