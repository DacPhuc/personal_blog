import {
  getNewsArticles,
  createNewArticles,
  getNewCategories,
  updateViews,
  getTrendArticle,
  createCategory,
} from '../services/news';

export default {
  namespace: 'news',

  state: {
    list: [],
    trend: [],
    categories: [],
    total: 0,
  },

  effects: {
    *getNews({ payload }, { call, put }) {
      const articles = yield call(getNewsArticles, payload);
      const categories = yield call(getNewCategories);
      const response = { articles, categories };
      yield put({
        type: 'saveNews',
        payload: response,
      });
    },

    *createNews({ payload }, { call, put }) {
      const response = yield call(createNewArticles, payload);
      yield put({
        type: 'appendToList',
        payload: response,
      });
    },

    *loadMore({ payload }, { call, put }) {
      const response = yield call(getNewsArticles, payload);
      yield put({
        type: 'appendLoadMore',
        payload: response.content,
      });
    },

    *updateViews({ payload }, { call }) {
      yield call(updateViews, payload);
    },

    *getTrendArticle(_, { call, put }) {
      const res = yield call(getTrendArticle);
      yield put({
        type: 'appendTrendList',
        payload: res,
      });
    },

    *createCategory({ payload }, { call, put }) {
      const res = yield call(createCategory, payload);
      yield put({
        type: 'appendNewCategory',
        payload: res,
      });
    },
  },

  reducers: {
    saveNews(state, action) {
      const { payload } = action;
      return {
        ...state,
        list: payload.articles.content,
        categories: payload.categories,
        total: payload.articles.totalElements,
      };
    },

    appendToList(state, action) {
      const { payload } = action;
      const { list, total } = state;
      return {
        ...state,
        list: [...list, payload],
        total: total + 1,
      };
    },

    appendLoadMore(state, action) {
      const { payload } = action;
      return {
        ...state,
        list: state.list.concat(payload),
      };
    },

    appendTrendList(state, action) {
      const { payload } = action;
      return {
        ...state,
        trend: payload,
      };
    },

    appendNewCategory(state, action) {
      const { payload } = action;
      return {
        ...state,
        categories: state.categories.concat(payload),
      };
    },
  },
};
