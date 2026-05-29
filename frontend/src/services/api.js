import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const predictFraud = async (data) => {
  const response = await API.post("/predict", data);
  return response.data;
};

export const fetchHistory = async () => {
  const response = await API.get("/history");
  return response.data;
};