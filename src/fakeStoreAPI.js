import axios from 'axios';
const URL_PRODUCTS = "https://fakestoreapi.com/products";
const URL_CATEGORIES = "https://fakestoreapi.com/products/categories";
const URL_CATEGORY = "https://fakestoreapi.com/products/category";

export const getAllProducts = async () => {
  const options = {
    method: 'GET',
    url: URL_PRODUCTS
  }

  try {
    const response = await axios(options);
    return response.data;
  } catch (err) {
    return err;
  };
};

export const getSingleProduct = async (id) => {
  const options = {
    method: 'GET',
    url: `${URL_PRODUCTS}/${id}`
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (err) {
    return err;
  };
};

export const getAllCatagories = async () => {
  const options = {
    method: 'GET',
    url: URL_CATEGORIES
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (err) {
    return err;
  };
};

export const getProductsInCategory = async (title) => {
  const options = {
    method: 'GET',
    url: `${URL_CATEGORY}/${title}`
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (err) {
    return err;
  };
};