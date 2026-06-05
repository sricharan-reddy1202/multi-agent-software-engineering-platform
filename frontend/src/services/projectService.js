import axios from "axios";

const API = axios.create({
  baseURL:
    "http://localhost:5000/api/projects",
});

API.interceptors.request.use(
  (config) => {

    const token =
      localStorage.getItem("token");

    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;
  }
);

export const getProjects = () =>
  API.get("/");

export const createProject =
  (projectData) =>
    API.post("/", projectData);