import { apiClient } from '../../../config/axios';

export const getUsers = async (id) => {
    return apiClient.get('/users');
}

export const getUser = async (id) => {
    return apiClient.get(`/users/${id}`);
}

export const editUser = async (id, data) => apiClient.put(`/users/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });