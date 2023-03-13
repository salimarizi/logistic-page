import axios from "axios";

const API = "http://localhost:8000/api";

export const getUOMS = async () => {
  const result = await axios.get(`${API}/uoms`);
  return result;
};

export const getCurrencies = async () => {
  const result = await axios.get(`${API}/currencies`);
  return result;
};

export const getCharges = async () => {
  const result = await axios.get(`${API}/charges`);
  return result;
};
