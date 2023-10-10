import axios from "axios";

export const getAllProducts = async () => {
  return await axios.get(`https://dummyjson.com/products`);
};

export const searchProducts = async (search) => {
  return await axios.get(`https://dummyjson.com/products/search?q=${search}`);
};
