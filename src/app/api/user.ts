import { User } from '../../types';
import { api } from './api';

export const getUsers = async (): Promise<User[]> => {
    const response = await api.get<User[]>('/users');
    return response.data;
  };
  
  export const getUserById = async (id: number): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`);
    return response.data;
  };
  