import axios from "axios";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const axiosApiInstace = axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
});

axiosApiInstace.interceptors.request.use(
    function (config) {

      const token = localStorage.getItem("token");
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`,
        };
      }

      return config;
    },

    function (error) {
      return Promise.reject(error);
    }
  );
  
  axiosApiInstace.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (
        error.response.status === 400 &&
        error.response.data.message === "token invalid"
      )

        history.push("/login");
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("id");
  
      return Promise.reject(error);
    }
  );
  
  export default axiosApiInstace;