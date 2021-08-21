import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { pushNotification } from "../Notification/state";

const Blog = () => {
  const blogList = useSelector((state: RootState) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
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
    </div>
  );
};

export default Blog;
