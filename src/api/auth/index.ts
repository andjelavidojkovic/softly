import { AuthResponse } from '../../models/Auth';
import { Assets, PaginatedData } from '../../models/Assets';
import httpClient from '../httpClient';
import { Bids, HistoryBids, ListOfBids } from '../../models/Bids';

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

const getMyBids = async () => {
  return httpClient.get<ListOfBids<Bids>>(`/users/me/currentBids`);
};

const getMyHistoryBids = async () => {
  return httpClient.get<HistoryBids<Bids>>(`/users/me/history`);
};

const userSetup = async (
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  postCode: string,
  country: string,
) => {
  return httpClient.patch(`users/${id}`, {
    email,
    firstName,
    lastName,
    phoneNumber,
    postCode,
    country,
  });
};

const passwordReset = async (
  oldPassword: string,
  newPassword: string,
  confirmNewPassword: string,
) => {
  return httpClient.patch('users/password', {
    oldPassword,
    newPassword,
    confirmNewPassword,
  });
};

const imageUpload = async (file: string) => {
  return httpClient.post('/users/upload', file);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  signup,
  getAssetsList,
  getLiveAssetsList,
  getUpcomingAssetsList,
  getMyBids,
  getMyHistoryBids,
  userSetup,
  passwordReset,
  imageUpload,
};
