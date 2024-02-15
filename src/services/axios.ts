import axios from "axios";

export const jobsAPI = axios.create({
  baseURL:'https://www.themuse.com/api/public',
});

jobsAPI.interceptors.request.use(
  function (config) {
    const token =  process.env.API_KEY;
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

jobsAPI.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);