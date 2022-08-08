import { AuthResponse } from '../../models/Auth';
import { Assets, PaginatedData } from '../../models/Assets';
import httpClient from '../httpClient';

const login = async (email: string, password: string) => {
  return httpClient.post<AuthResponse>('/users/signin', {
    email,
    password,
  });
};

const signup = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  return httpClient.post<AuthResponse>('users/signup', {
    email,
    password,
    firstName,
    lastName,
  });
};

const getAssetsList = async (page: number, limit: number) => {
  return httpClient.get<PaginatedData<Assets>>(
    `/assets?$page=${page}&$limit=${limit}`,
  );
};

const getLiveAssetsList = async (
  page: number,
  limit: number,
  startDate: string,
) => {
  return httpClient.get<PaginatedData<Assets>>(
    `/assets?$page=${page}&$limit=${limit}&startDate=${startDate}`,
  );
};

const getUpcomingAssetsList = async (
  page: number,
  limit: number,
  startDate: string,
) => {
  return httpClient.get<PaginatedData<Assets>>(
    `/assets?$page=${page}&$limit=${limit}&startDate=${startDate}`,
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  signup,
  getAssetsList,
  getLiveAssetsList,
  getUpcomingAssetsList,
};
