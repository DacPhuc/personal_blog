import { store } from "../store";
import { extend } from "umi-request";
import { pushNotification } from "../components/Notification/state";

const errorHandler = (error: any) => {
  store.dispatch(
    pushNotification({
      type: "error",
      message: `${error}`,
    })
  );

  const { response = {} } = error;
  const { status } = response;

  if (status === 401) {
    store.dispatch(
      pushNotification({
        type: "error",
        message: "Error 400",
      })
    );

    return;
  }
  // environment should not be used
  if (status === 403) {
    store.dispatch(
      pushNotification({
        type: "error",
        message: "Error 403",
      })
    );
    return;
  }
  if (status <= 504 && status >= 500) {
    store.dispatch(
      pushNotification({
        type: "error",
        message: "Error 500",
      })
    );
    return;
  }
  if (status >= 404 && status < 422) {
    store.dispatch(
      pushNotification({
        type: "error",
        message: `Error ${status}`,
      })
    );
    return;
  }
};

const request = extend({
  errorHandler,
  credentials: "include",
});

export default request;
