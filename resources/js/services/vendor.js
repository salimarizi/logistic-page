import axios from "../utils/Api";

export const getVendors = async () => {
  const result = await axios.get(`/vendors`);
  return result;
};