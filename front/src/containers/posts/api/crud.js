import { apiClient } from '../../../config/axios';

export const getPost = async (id) => {
    apiClient.get(`/posts/${id}`);
}

export const getPosts = async () => {
    return apiClient.get('/posts');
}

export const createPost = async (data) => apiClient.post('/posts', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  export const editPost = async (id, data) => apiClient.put(`/posts/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });