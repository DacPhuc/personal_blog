import request from '@/utils/request';
import { stringify } from 'qs';

export async function createNewArticles(params) {
  return request('/api/articles', { method: 'POST', data: params });
}

export async function getNewsArticles(param) {
  return request(`/api/articles?${stringify(param)}`);
}

export async function getNewCategories() {
  return request('/api/categories');
}

export async function updateViews(id) {
  return request(`/api/articles/${id}`);
}

export async function getTrendArticle() {
  return request('/api/articles/trend');
}

export async function createCategory(payload) {
  return request('/api/categories', { method: 'POST', data: payload });
}
