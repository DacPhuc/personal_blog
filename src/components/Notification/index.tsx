import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Notification = () => {
  const { open } = useSelector((state: RootState) => state.notifications);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity="success">This is a success message!</Alert>
    </Snackbar>
  );
};

export default Notification;
