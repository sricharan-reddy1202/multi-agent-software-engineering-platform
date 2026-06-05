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

export const createRequirement =
  (projectId, content) =>
    API.post(
      `/${projectId}/requirements`,
      {
        content,
      }
    );
export const getRequirements =
  (projectId) =>
    API.get(
      `/${projectId}/requirements`
    );
export const runWorkflow =
  (requirementId) =>
    API.post(
      `/requirements/${requirementId}/run-workflow`
    );