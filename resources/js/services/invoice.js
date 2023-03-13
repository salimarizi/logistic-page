import axios from "../utils/Api";

export const getInvoices = async () => {
  const result = await axios.get(`/invoices`);
  return result;
};