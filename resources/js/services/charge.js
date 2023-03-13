import axios from "../utils/Api";

export const getCharges = async () => {
  const result = await axios.get(`/charges`);
  return result;
};