import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type NotificationState = {
  open: boolean;
  data?: NotificationInfo;
};

const initialState: NotificationState = {
  open: false,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    pushNotification: (state, action: PayloadAction<NotificationInfo>) => {
      state.open = true;
      state.data = action.payload;
    },
    hideNotification: (state) => {
      state.open = false;
    },
  },
});

export const { pushNotification, hideNotification } = notificationSlice.actions;

export const notificationSelector = (state: RootState) =>
  state.notifications.data;

export const isDisplayNotificationSelector = (state: RootState) =>
  state.notifications.open;

export default notificationSlice.reducer;
