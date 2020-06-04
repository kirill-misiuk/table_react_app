import axios from "axios";
import { config } from "../config";
const http = axios.create({
  baseURL: config.url,
  timeout: config.timeout,
  credentials: true,
});

http.interceptors.response.use(
  (response) => response.data,
  (error) => console.log(error)
);

export const getData = () => {
  const url = `${config.protocol}://${config.host}/`;
  return http.get(url);
};
export const deleteData = (id) => {
  const url = `${config.protocol}://${config.host}/${id}`;
  return http.delete(url);
};
