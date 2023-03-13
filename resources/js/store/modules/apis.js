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

export const getVendors = async () => {
  const result = await axios.get(`${API}/vendors`);
  return result;
};

export const getInvoices = async () => {
  const result = await axios.get(`${API}/invoices`);
  return result;
};

export const getCustomers = async () => {
  const result = await axios.get(`${API}/customers`);
  return result;
};