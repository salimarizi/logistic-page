import axios from "../utils/Api";

export const getCurrencies = async () => {
  const result = await axios.get(`/currencies`);
  return result;
};