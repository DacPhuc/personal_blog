// import { extend } from "umi-request";

// const errorHandler = (error: any) => {
//   console.log("error", error);

//   const { response = {} } = error;
//   const { status } = response;

//   if (status === 401) {
//     notification.error({
//       message: "Error 400",
//     });
//     /* eslint-disable no-underscore-dangle */
//     window.g_app._store.dispatch({
//       type: "login/logout",
//     });
//     return;
//   }
//   // environment should not be used
//   if (status === 403) {
//     notification.error({
//       message: "Error 403",
//     });
//     return;
//   }
//   if (status <= 504 && status >= 500) {
//     notification.error({
//       message: "Error 500",
//     });
//     return;
//   }
//   if (status >= 404 && status < 422) {
//     notification.error({
//       message: `Error ${status}`,
//     });
//   }
// };

export {};
