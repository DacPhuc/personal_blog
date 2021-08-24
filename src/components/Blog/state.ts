import { RootState } from "../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { query } from "../../services/blog";

type BlogState = {
  data: Blog[];
};

const initialState: BlogState = {
  data: [],
};

export const fetchArticlesList = createAsyncThunk(
  "blogs/fetchArticlesList",
  async () => {
    const response = await query();
    return response;
  }
);

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const blogsSelector = (state: RootState) => state.blogs.data;

export default blogsSlice.reducer;
