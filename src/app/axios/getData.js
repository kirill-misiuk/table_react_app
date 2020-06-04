import axios from "axios";

const http = axios.create({
  baseURL: config.url,
  timeout: config.timeout,
  credentials: true,
});

http.interceptors.response.use(
    (response) => response.data.data,
    (error) => console.log(error)
);

export const getData = (preset) => {
  const url = `${config.protocol}://${config.testHost}/`;
  return http.get(url);
};