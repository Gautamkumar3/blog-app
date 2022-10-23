import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/users",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("token")).token;
    if (token) {
      config.headers["x-access-token"] = token; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/users/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await instance.post("/users/refresh", {
            refreshToken: JSON.parse(localStorage.getItem("token")).rtoken,
          });

          const { token } = rs.data;
          TokenService.updateLocalAccessToken(token);

          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;