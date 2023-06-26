import { get, post } from "./axios";

export const addProduct = async (productData: any) => {
  try {
    const response = await post("/product/addProduct", { body: productData });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchProducts = async () => {
  const { data } = await get("/product/getProducts");
  return data;
};
