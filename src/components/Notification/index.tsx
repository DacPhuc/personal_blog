import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import {
  hideNotification,
  isDisplayNotificationSelector,
  notificationSelector,
} from "./state";

const Notification = () => {
  const dispatch = useDispatch();
  const open = useSelector(isDisplayNotificationSelector);
  const data = useSelector(notificationSelector);

  const hideNotifications = () => {
    dispatch(hideNotification());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={1000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={hideNotifications}
    >
      {data?.type === "success" ? (
        <Alert severity="success" onClose={hideNotifications}>
          {data?.message}
        </Alert>
      ) : (
        <Alert severity="error" onClose={hideNotifications}>
          {data?.message}
        </Alert>
      )}
    </Snackbar>
  );
};

export default Notification;
