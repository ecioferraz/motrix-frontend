import axios from 'axios';
import IPost from '../interfaces/IPost';

const baseURL = 'http://localhost:3001';

const api = axios.create({ baseURL });

const getData = async (endpoint: string) => api.get(endpoint);

const postData = async (endpoint: string, data: IPost) => {
  return api.post(endpoint, data);
};

const updateData = async (endpoint: string, data: IPost) => {
  return api.put(endpoint, data);
};

const deleteData = async (endpoint: string) => {
  api.delete(endpoint);
};

export {
  getData,
  postData,
  updateData,
  deleteData,
};
