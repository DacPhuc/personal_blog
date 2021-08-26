import { RootState } from "../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { queryArticleContent } from "../../services/blog";

type ArticleState = {
  data: any;
};

type ArticleParam = {
  id: string;
  slug: string;
};

const initialState: ArticleState = {
  data: null,
};

export const fetchArticleContent = createAsyncThunk(
  "articles/fetchArticlesList",
  async (payload: ArticleParam) => {
    const response = await queryArticleContent(payload.id, payload.slug);
    return response;
  }
);

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleContent.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const articleContentSelector = (state: RootState) => state.articles.data;

export default articlesSlice.reducer;
