import axios from "../utils/Api";

export const getUOMS = async () => {
  const result = await axios.get(`/uoms`);
  return result;
};