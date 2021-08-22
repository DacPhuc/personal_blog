import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { query } from "../../services/blog";

type NotificationState = {
  open: boolean;
  data?: NotificationInfo;
};

const initialState: NotificationState = {
  open: false,
};

export const fetchSomething = createAsyncThunk(
  "notification/fetchSomething",
  async () => {
    const response = await query();
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchSomething.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const { pushNotification, hideNotification } = notificationSlice.actions;

export const notificationSelector = (state: RootState) =>
  state.notifications.data;

export const isDisplayNotificationSelector = (state: RootState) =>
  state.notifications.open;

export default notificationSlice.reducer;
