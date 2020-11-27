import http from "../http-common";

const getAll = (params) => {
  return http.get("/reports", { params });
};

const get = id => {
  return http.get(`/report/${id}`);
};

const create = data => {
  return http.post("/addReport", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/deleteReport/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove
};