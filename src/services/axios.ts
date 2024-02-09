import axios from "axios";
import {API_BASE_URL,API_KEY} from "@env"

export const jobsAPI = axios.create({
  baseURL: API_BASE_URL,
});

jobsAPI.interceptors.request.use(
  function (config) {
    const token = API_KEY;
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