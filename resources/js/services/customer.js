import axios from "../utils/Api";

export const getCustomers = async () => {
  const result = await axios.get(`/customers`);
  return result;
};