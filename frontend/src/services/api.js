import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-welfare-fraud-detection-system-3.onrender.com",
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
