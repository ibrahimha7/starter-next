import axios from "axios";
import { API_URL } from "@/config/index";

import { useCookies } from "react-cookie";
import { useEffect } from "react";

const useApi = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const Axios = axios.create({
    baseURL: API_URL,
    // auth:`Bearer ${parseCookies}`
  });

  Axios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${cookies}`;
      // Do something before request is sent
      return config;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  Axios.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of
      // 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    (error) => {
      // Any status codes that falls outside the range
      // of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error.response);
    }
  );
  return { Axios };
};

export { useApi };
