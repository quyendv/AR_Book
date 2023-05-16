import axios from 'axios';

const baseURL = 'http://localhost:3000';

const publicInstance = axios.create({
  baseURL,
  // paramsSerializer: {
  //   encode: (params) => queryString.stringify(params),
  // },
});

publicInstance.interceptors.request.use(
  (config) => ({
    ...config,
    // @ts-ignore
    headers: {
      // 'Content-Type': 'application/json',
      'Content-Type': config.headers['Content-Type'] || 'application/json', // tránh overrides khi truyền Content-Type khác như multipart/form-data khi upload
    },
  }),
  (error) => {
    throw error.response.data;
  },
);

publicInstance.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (error) => {
    throw error.response.data;
  },
);

export default publicInstance;
