import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { pushNotification } from "../Notification/state";
import ArticleComponent from "./ArticleComponent";
import { blogsSelector, fetchArticlesList } from "./state";
import { Helmet } from "react-helmet-async";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.div`
  width: 100%;
`;

const ListArticles = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Blog: React.FC = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Helmet title="Dapu blog" />
      <Header>
        <p>Hello World, i'm still working on it, see u soon</p>
      </Header>
      <ListArticles>
        {blogList.map((article: Blog, index) => {
          return <ArticleComponent key={index} article={article} />;
        })}
      </ListArticles>
    </Wrapper>
  );
};

export default Blog;
