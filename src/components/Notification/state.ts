import { RootState } from "../../store";

type NotificationState = {
  open: boolean;
  data?: Notification;
};

const initialState: NotificationState = {
  open: true,
};

const reducer = (
  state: NotificationState = initialState
): NotificationState => {
  return state;
};

export const notificationSelector = (state: RootState) =>
  state.notifications.data;

export default reducer;
