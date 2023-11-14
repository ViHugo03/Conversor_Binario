import axios from "axios";

const config = {
    default: "http://localhost:8080",
};

const axiosInstance = axios.create({
  baseURL: config.default,
  timeout: 15000,
});

export default axiosInstance;
