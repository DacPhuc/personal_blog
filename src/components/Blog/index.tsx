import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import generateHostParam from "../../utils/genHostUrl";

const Blog = () => {
  const blogList = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    console.log(blogList);
  }, []);

  return (
    <div>
      <Helmet title="Dapu blog" />
      <p>Hello World, i'm still working on it, see u soon</p>
    </div>
  );
};

export default Blog;
