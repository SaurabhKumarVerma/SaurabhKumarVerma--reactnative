import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhdXJhYmgubWNhLmVuZ2dAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL1NhdXJhYmhLdW1hclZlcm1hIiwiaWF0IjoxNjYyNzg2ODM3LCJleHAiOjE2NjMyMTg4Mzd9.n_MEeeGAcqY2DEkGmSFx2V1ReWQzlIm2ycfVDFvMD2A'

const axiosApi = axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api",
  headers: { Authorization: `Bearer ${token}` }
});

axiosApi.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axiosApi.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosApi