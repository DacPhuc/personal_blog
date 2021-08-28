import { RootState } from "../../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { queryArticleContent } from "../../services/blog";

type ArticleState = {
  data: any;
  loading: boolean;
};

type ArticleParam = {
  id: string;
  slug: string;
};

const initialState: ArticleState = {
  data: null,
  loading: true,
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
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchArticleContent.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const articleContentSelector = (state: RootState) => state.articles.data;
export const loadingContentSelector = (state: RootState) =>
  state.articles.loading;

export default articlesSlice.reducer;
