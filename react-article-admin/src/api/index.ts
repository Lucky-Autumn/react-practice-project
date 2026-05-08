import { message } from "antd";
import axios, { AxiosError, type AxiosRequestTransformer } from "axios";
import qs from "qs";

const apiClient = axios.create({
  baseURL: "https://api-article-admin.liulongbin.top",
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "x-api-key": "ab428ee8-c6ae-4bee-86ca-a5bd3437cff5",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // 在发送请求之前，可以在这里添加一些公共的请求参数或进行其他处理
    const url = config.url;
    const method = config.method?.toUpperCase();

    if (
      (url === "/my/article/add" && method === "POST") ||
      (url === "/my/article/info" && method === "PUT")
    ) {
      config.transformRequest = [];
    } else {
      config.transformRequest = requestTransform;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    // 在接收响应之前，可以在这里对响应数据进行处理
    return response.data; // 直接返回响应数据
  },
  (error: AxiosError<{ code: number; message: string }>) => {
    // 处理响应错误
    if (error.response?.data) {
      message.error(error.response.data.message);
      return Promise.reject(error.response.data);
    } else {
      // 服务器异常或网络错误
      message.error(error.message);
      return Promise.reject();
    }
  },
);

const requestTransform: AxiosRequestTransformer = (data) => {
  if (data instanceof FormData) {
    return qs.stringify(Object.fromEntries(data));
  } else {
    return qs.stringify(data);
  }
};

export interface ApiResponse {
  code: number;
  message: string;
}

export default apiClient;
