import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { pushNotification } from "../Notification/state";
import ArticleComponent from "./ArticleComponent";
import { blogsSelector, fetchArticlesList } from "./state";

const Blog = () => {
  const blogList = useSelector(blogsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(
      pushNotification({
        type: "success",
        message: "Hello i added notification to my page",
      })
    );
  }, []);

  return (
    <div>
      <Helmet title="Dapu blog" />
      <p>Hello World, i'm still working on it, see u soon</p>
      {blogList.map((article: Blog, index) => {
        return <ArticleComponent key={index} article={article} />;
      })}
    </div>
  );
};

export default Blog;
